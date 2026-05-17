import { AnimatePresence, motion } from "framer-motion";
import L from "leaflet";
import "leaflet-routing-machine";
import { useEffect, useMemo, useRef, useState } from "react";
import kyrgyzstan from "../data/kyrgyzstan.json";
import { buildUrl, formatRating, parseView, pluralizeReviews, updateDocumentTitle } from "../js/app.js";
import { getActiveUser, loginUser, logoutUser, registerUser, validateLogin, validateRegister } from "../js/auth.js";
import { averageRating, addComment, getComments } from "../js/comments.js";
import { addFallbackRoute, createBaseMap, createDivIcon, fitMapToStops, kyrgyzstanCenter } from "../js/map.js";
import { buildPlaceFacts, getSimilarPlaces } from "../js/place.js";
import { getAllRoutes, getPlaceById, getRegionById, getRegionHighlights, getRouteById, searchRegions } from "../js/regions.js";
import { calculateRouteDistance, estimateTravelTime } from "../js/route.js";
import heroImage from "../assets/images/regions/hero-kyrgyzstan.jpg";
import bishkekImage from "../assets/images/regions/bishkek.jpg";
import oshImage from "../assets/images/regions/osh.jpg";
import issykKulImage from "../assets/images/regions/issyk-kul.jpg";
import narynImage from "../assets/images/regions/naryn.jpg";
import batkenImage from "../assets/images/regions/batken.jpg";
import talasImage from "../assets/images/regions/talas.jpg";
import chuyImage from "../assets/images/regions/chuy.jpg";
import jalalAbadImage from "../assets/images/regions/jalal-abad.jpg";
import cafeImage from "../assets/images/cafes/kyrgyz-cafe.jpg";

const data = kyrgyzstan as any;

const assetMap: Record<string, string> = {
  "/assets/images/regions/hero-kyrgyzstan.jpg": heroImage,
  "/assets/images/regions/bishkek.jpg": bishkekImage,
  "/assets/images/regions/osh.jpg": oshImage,
  "/assets/images/regions/issyk-kul.jpg": issykKulImage,
  "/assets/images/regions/naryn.jpg": narynImage,
  "/assets/images/regions/batken.jpg": batkenImage,
  "/assets/images/regions/talas.jpg": talasImage,
  "/assets/images/regions/chuy.jpg": chuyImage,
  "/assets/images/regions/jalal-abad.jpg": jalalAbadImage,
  "/assets/images/cafes/kyrgyz-cafe.jpg": cafeImage
};

function imageUrl(path?: string) {
  return (path && assetMap[path]) || path || heroImage;
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * 30 * Math.PI) / 180;
        const x1 = 12 + Math.cos(angle) * 5.4;
        const y1 = 12 + Math.sin(angle) * 5.4;
        const x2 = 12 + Math.cos(angle) * 9.6;
        const y2 = 12 + Math.sin(angle) * 9.6;
        return <path key={index} d={`M${x1} ${y1} L${x2} ${y2}`} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />;
      })}
    </svg>
  );
}

function Stars({ value }: { value: number }) {
  const rounded = Math.round(value);
  return (
    <span className="stars" aria-label={`Рейтинг ${formatRating(value)} из 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} style={{ opacity: index < rounded ? 1 : 0.28 }}>★</span>
      ))}
    </span>
  );
}

function AppLink({ to, children, className, onNavigate }: any) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(to);
      }}
    >
      {children}
    </a>
  );
}

function Navigation({ view, user, onNavigate, onLogout }: any) {
  const [open, setOpen] = useState(false);
  const solid = ["regions", "route"].includes(view.page);
  const links = [
    { label: "Главная", to: buildUrl("home") },
    { label: "Карта", to: buildUrl("regions") },
    { label: "Маршруты", to: buildUrl("route") },
    { label: "Области", to: buildUrl("regions") }
  ];

  const handleNavigate = (to: string) => {
    setOpen(false);
    onNavigate(to);
  };

  return (
    <>
      <nav className={`top-nav ${solid ? "is-solid" : ""}`}>
        <AppLink to={buildUrl("home")} onNavigate={handleNavigate} className="brand-mark" aria-label="На главную">
          <span className="brand-sun"><SunIcon /></span>
          <span>Сапар KG</span>
        </AppLink>

        <div className="nav-links">
          {links.map((link) => (
            <AppLink key={link.label} to={link.to} onNavigate={handleNavigate}>{link.label}</AppLink>
          ))}
          {user ? (
            <button type="button" onClick={onLogout}>Выйти, {user.name}</button>
          ) : (
            <AppLink to={buildUrl("login")} onNavigate={handleNavigate}>Войти</AppLink>
          )}
          <AppLink to={buildUrl("register")} onNavigate={handleNavigate} className="nav-cta">Регистрация</AppLink>
        </div>

        <button className="mobile-menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Открыть меню">
          <span>{open ? "Закрыть" : "Меню"}</span>
        </button>
      </nav>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {links.map((link) => (
          <AppLink key={link.label} to={link.to} onNavigate={handleNavigate}>{link.label}</AppLink>
        ))}
        {user ? (
          <button type="button" onClick={() => { setOpen(false); onLogout(); }}>Выйти, {user.name}</button>
        ) : (
          <AppLink to={buildUrl("login")} onNavigate={handleNavigate}>Войти</AppLink>
        )}
        <AppLink to={buildUrl("register")} onNavigate={handleNavigate}>Регистрация</AppLink>
      </div>
    </>
  );
}

function HomePage({ onNavigate }: any) {
  const featuredRegions = data.regions.filter((region: any) => ["issyk-kul", "naryn", "chuy"].includes(region.id));
  const featuredRoutes = getAllRoutes(data.regions).slice(0, 3);

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${imageUrl(data.site.heroImage)})` }}>
        <div className="kg-ornament" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <motion.span className="hero-brand" initial={{ letterSpacing: "-0.16em" }} animate={{ letterSpacing: "-0.09em" }} transition={{ duration: 0.9 }}>
            Сапар KG
          </motion.span>
          <h1>Планировщик путешествий по Кыргызстану</h1>
          <p>{data.site.tagline}. Выбирайте области, сохраняйте впечатления, стройте маршруты и находите места, куда хочется вернуться.</p>
          <div className="hero-actions">
            <AppLink to={buildUrl("regions")} onNavigate={onNavigate} className="btn btn-primary">Начать путешествие</AppLink>
            <AppLink to={buildUrl("login")} onNavigate={onNavigate} className="btn btn-secondary">Войти</AppLink>
            <AppLink to={buildUrl("register")} onNavigate={onNavigate} className="btn btn-secondary">Регистрация</AppLink>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Выберите настроение поездки</h2>
          <p>Озеро, джайлоо или быстрый выезд из столицы - начните с направления, которое подходит вашему темпу.</p>
        </div>
        <div className="grid grid-3">
          {featuredRegions.map((region: any) => (
            <RegionCard key={region.id} region={region} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Готовые маршруты</h2>
          <p>Каждый маршрут открывается на карте, показывает остановки, расстояние и расчетное время в пути.</p>
        </div>
        <div className="grid grid-3">
          {featuredRoutes.map((route: any) => (
            <RouteCard key={route.id} route={route} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    </>
  );
}

function AuthPage({ mode, onNavigate, onUser }: any) {
  const isRegister = mode === "register";
  const [values, setValues] = useState({ name: "", city: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  const setField = (field: string, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const submit = (event: any) => {
    event.preventDefault();
    const nextErrors = isRegister ? validateRegister(values) : validateLogin(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setMessage("Проверьте заполнение полей");
      return;
    }

    const result = isRegister ? registerUser(values) : loginUser(values);
    setMessage(result.message);
    if (result.ok) {
      onUser(result.user);
      setTimeout(() => onNavigate(buildUrl("regions")), 600);
    }
  };

  return (
    <section className="auth-page" style={{ "--auth-image": `url(${heroImage})` } as any}>
      <div className="kg-ornament" />
      <motion.div className="auth-layout" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <div className="auth-copy">
          <span className="eyebrow">{isRegister ? "Новый профиль" : "Личный кабинет"}</span>
          <h1>{isRegister ? "Создайте профиль путешественника" : "Войдите и продолжите маршрут"}</h1>
          <p>
            Сохраняйте отзывы в LocalStorage, возвращайтесь к маршрутам и планируйте поездку по областям Кыргызстана на русском языке.
          </p>
        </div>

        <form className="auth-form" onSubmit={submit} noValidate>
          {message && <p className="form-message">{message}</p>}
          {isRegister && (
            <>
              <FormInput label="Имя" value={values.name} error={errors.name} placeholder="Например, Айдана" onChange={(value: string) => setField("name", value)} />
              <FormInput label="Город" value={values.city} error={errors.city} placeholder="Бишкек" onChange={(value: string) => setField("city", value)} />
            </>
          )}
          <FormInput label="Электронная почта" type="email" value={values.email} error={errors.email} placeholder="you@example.com" onChange={(value: string) => setField("email", value)} />
          <FormInput label="Пароль" type="password" value={values.password} error={errors.password} placeholder="Минимум 6 символов" onChange={(value: string) => setField("password", value)} />
          {isRegister && (
            <FormInput label="Повторите пароль" type="password" value={values.confirmPassword} error={errors.confirmPassword} placeholder="Повторите пароль" onChange={(value: string) => setField("confirmPassword", value)} />
          )}
          <button className="btn btn-primary" type="submit">{isRegister ? "Зарегистрироваться" : "Войти"}</button>
          <p className="auth-switch">
            {isRegister ? "Уже есть профиль? " : "Еще нет аккаунта? "}
            <AppLink to={buildUrl(isRegister ? "login" : "register")} onNavigate={onNavigate}>
              {isRegister ? "Войти" : "Зарегистрироваться"}
            </AppLink>
          </p>
        </form>
      </motion.div>
    </section>
  );
}

function FormInput({ label, type = "text", value, error, placeholder, onChange }: any) {
  return (
    <div className="form-row">
      <label>{label}</label>
      <input type={type} value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}

function RegionsPage({ onNavigate }: any) {
  const [query, setQuery] = useState("");
  const regions = searchRegions(data.regions, query);

  return (
    <main className="page">
      <motion.header className="page-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="eyebrow">Интерактивная карта</span>
        <h1 className="page-title">Все области Кыргызстана на одной карте</h1>
        <p className="page-lead">Нажмите на маркер области, чтобы открыть страницу с достопримечательностями, отелями, кафе, маршрутами, рейтингом и отзывами.</p>
      </motion.header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="map-toolbar">
          <input className="search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Поиск: Иссык-Куль, джайлоо, базар, горы..." />
          <AppLink to={buildUrl("route")} onNavigate={onNavigate} className="btn btn-dark">Построить маршрут</AppLink>
        </div>
        <LeafletPanel mapKey={`regions-${regions.map((region: any) => region.id).join("-")}`} mode="regions" regions={regions} onNavigate={onNavigate} />
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Области и города</h2>
          <p>Бишкек и Ош показаны как отдельные городские направления, чтобы удобно планировать старт и финиш поездки.</p>
        </div>
        <div className="grid grid-3">
          {regions.map((region: any) => (
            <RegionCard key={region.id} region={region} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    </main>
  );
}

function RegionCard({ region, onNavigate }: any) {
  return (
    <article className="interactive-card">
      <button
        type="button"
        style={{ all: "unset", cursor: "pointer", display: "block", height: "100%" }}
        onClick={() => onNavigate(buildUrl("region", { id: region.id }))}
        aria-label={`Открыть регион ${region.name}`}
      >
        <div className="card-media"><img src={imageUrl(region.image)} alt={region.name} /></div>
        <div className="card-body">
          <div className="rating"><Stars value={region.rating} /> {formatRating(region.rating)}</div>
          <h3>{region.name}</h3>
          <p>{region.shortDescription}</p>
          <div className="meta-line">
            {getRegionHighlights(region).slice(0, 3).map((item: string) => <span className="meta-chip" key={item}>{item}</span>)}
          </div>
        </div>
      </button>
    </article>
  );
}

function RegionPage({ id, onNavigate }: any) {
  const region = getRegionById(data.regions, id);
  const comments = getComments(`region:${region.id}`);
  const rating = averageRating(region.rating, comments);

  return (
    <>
      <section className="region-hero" style={{ backgroundImage: `url(${imageUrl(region.image)})` }}>
        <div className="kg-ornament" />
        <motion.div className="region-hero-content" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">{region.type}</span>
          <h1>{region.name}</h1>
          <p>{region.shortDescription}</p>
          <div className="hero-actions">
            <AppLink to={buildUrl("route", { id: region.routes[0]?.id })} onNavigate={onNavigate} className="btn btn-primary">Открыть маршрут</AppLink>
            <AppLink to={buildUrl("regions")} onNavigate={onNavigate} className="btn btn-secondary">Вернуться к карте</AppLink>
          </div>
        </motion.div>
      </section>

      <main className="page" style={{ paddingTop: "4rem" }}>
        <section className="section region-summary" style={{ paddingTop: 0 }}>
          <div className="glass-panel region-text">
            <span className="eyebrow">Описание области</span>
            <h2>{region.name}: что посмотреть и как отдыхать</h2>
            <p>{region.description}</p>
            <ul className="feature-list">
              <li><span className="rating"><Stars value={rating} /> {formatRating(rating)}</span> общий рейтинг</li>
              <li>Лучший сезон: {region.season}</li>
              <li>Формат поездки: {region.bestFor.join(", ")}</li>
            </ul>
          </div>
          <div className="gallery-grid">
            {region.gallery.map((item: string, index: number) => <img src={imageUrl(item)} alt={`${region.name}, фото ${index + 1}`} key={item} />)}
          </div>
        </section>

        <ContentSection title="Достопримечательности" text="Главные места, ради которых стоит включить область в маршрут.">
          <div className="grid grid-3">
            {region.places.map((place: any) => <PlaceCard key={place.id} place={{ ...place, regionName: region.name }} onNavigate={onNavigate} />)}
          </div>
        </ContentSection>

        <ContentSection title="Лучшие места отдыха" text="Идеи для темпа поездки: от спокойных прогулок до насыщенных горных дней.">
          <div className="grid grid-3">
            {region.bestFor.map((item: string) => (
              <div className="interactive-card" key={item}>
                <div className="card-body">
                  <span className="meta-chip">Рекомендация</span>
                  <h3>{item}</h3>
                  <p>Добавьте это направление в личный план и подберите рядом кафе, проживание и маршрут на карте.</p>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Отели" text="Подборка размещения для городского отдыха, горных ночевок и семейных поездок.">
          <div className="grid grid-2">
            {region.hotels.map((hotel: any) => <HotelCafeCard key={hotel.id} item={hotel} type="hotel" />)}
          </div>
        </ContentSection>

        <ContentSection title="Кафе и рестораны" text="Места, где можно попробовать кыргызскую кухню, чай, боорсоки, плов и региональные блюда.">
          <div className="grid grid-2">
            {region.cafes.map((cafe: any) => <HotelCafeCard key={cafe.id} item={cafe} type="cafe" />)}
          </div>
        </ContentSection>

        <ContentSection title="Маршруты" text="Готовые сценарии путешествия с остановками, расстоянием и картой маршрута.">
          <div className="grid grid-3">
            {region.routes.map((route: any) => <RouteCard key={route.id} route={{ ...route, regionName: region.name, accent: region.accent }} onNavigate={onNavigate} />)}
          </div>
        </ContentSection>

        <ContentSection title="Карта области" text="Откройте места на карте и оцените расстояния между главными точками.">
          <LeafletPanel mapKey={`region-${region.id}`} mode="region" region={region} />
        </ContentSection>

        <ContentSection title="Комментарии пользователей" text="Оставьте отзыв и оценку. Данные сохраняются в LocalStorage вашего браузера.">
          <CommentsBlock entityKey={`region:${region.id}`} baseRating={region.rating} />
        </ContentSection>
      </main>
    </>
  );
}

function PlaceCard({ place, onNavigate }: any) {
  return (
    <article className="interactive-card">
      <button type="button" style={{ all: "unset", cursor: "pointer", display: "block", height: "100%" }} onClick={() => onNavigate(buildUrl("place", { id: place.id }))}>
        <div className="card-media"><img src={imageUrl(place.image)} alt={place.name} /></div>
        <div className="card-body">
          <div className="rating"><Stars value={place.rating} /> {formatRating(place.rating)}</div>
          <h3>{place.name}</h3>
          <p>{place.description}</p>
          <div className="meta-line">
            <span className="meta-chip">{place.category}</span>
            <span className="meta-chip">{place.regionName}</span>
          </div>
        </div>
      </button>
    </article>
  );
}

function HotelCafeCard({ item, type }: any) {
  return (
    <article className="interactive-card">
      <div className="card-media"><img src={imageUrl(item.image)} alt={item.name} /></div>
      <div className="card-body">
        <div className="rating"><Stars value={item.rating} /> {formatRating(item.rating)}</div>
        <h3>{item.name}</h3>
        <p>{type === "hotel" ? item.level : item.cuisine}</p>
        <div className="meta-line">
          <span className="meta-chip">{item.priceRange}</span>
          {(item.amenities || [item.signature]).slice(0, 3).map((value: string) => <span key={value} className="meta-chip">{value}</span>)}
        </div>
      </div>
    </article>
  );
}

function ContentSection({ title, text, children }: any) {
  return (
    <section className="section">
      <div className="section-heading">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {children}
    </section>
  );
}

function PlacePage({ id, onNavigate }: any) {
  const place = getPlaceById(data.regions, id);
  const region = getRegionById(data.regions, place.regionId);
  const comments = getComments(`place:${place.id}`);
  const rating = averageRating(place.rating, comments);
  const facts = buildPlaceFacts(place);
  const similar = getSimilarPlaces(data.regions, place);

  return (
    <>
      <section className="place-hero" style={{ backgroundImage: `url(${imageUrl(place.image)})` }}>
        <div className="kg-ornament" />
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">{place.category} в регионе {region.name}</span>
          <h1>{place.name}</h1>
          <p>{place.description}</p>
          <div className="hero-actions">
            <AppLink to={buildUrl("region", { id: region.id })} onNavigate={onNavigate} className="btn btn-primary">Смотреть область</AppLink>
            <AppLink to={buildUrl("route", { id: region.routes[0]?.id })} onNavigate={onNavigate} className="btn btn-secondary">Построить маршрут</AppLink>
          </div>
        </motion.div>
      </section>

      <main className="page" style={{ paddingTop: "4rem" }}>
        <section className="section place-layout" style={{ paddingTop: 0 }}>
          <div className="glass-panel facts-list">
            <div className="rating"><Stars value={rating} /> {formatRating(rating)} · {pluralizeReviews(place.reviews + comments.length)}</div>
            {facts.map((fact: any) => (
              <div className="fact-row" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
          <div className="glass-panel how-to">
            <span className="eyebrow">Как добраться</span>
            <h2>Маршрут и полезные советы</h2>
            <p>{place.howToGet}</p>
            <p>{place.description}</p>
          </div>
        </section>

        <ContentSection title="Карта достопримечательности" text="Точка отмечена на Leaflet-карте с координатами места.">
          <LeafletPanel mapKey={`place-${place.id}`} mode="place" place={place} />
        </ContentSection>

        {similar.length > 0 && (
          <ContentSection title="Похожие места" text="Если понравился формат этого места, добавьте в план похожие точки по Кыргызстану.">
            <div className="grid grid-3">
              {similar.map((item: any) => <PlaceCard key={item.id} place={item} onNavigate={onNavigate} />)}
            </div>
          </ContentSection>
        )}

        <ContentSection title="Отзывы" text="Поделитесь впечатлениями. Отзывы сохраняются локально в браузере.">
          <CommentsBlock entityKey={`place:${place.id}`} baseRating={place.rating} />
        </ContentSection>
      </main>
    </>
  );
}

function RouteCard({ route, onNavigate }: any) {
  const distance = calculateRouteDistance(route.stops);
  return (
    <article className="interactive-card">
      <button type="button" style={{ all: "unset", cursor: "pointer", display: "block", height: "100%" }} onClick={() => onNavigate(buildUrl("route", { id: route.id }))}>
        <div className="card-body">
          <span className="meta-chip">{route.regionName || "Кыргызстан"}</span>
          <h3>{route.name}</h3>
          <p>{route.description}</p>
          <div className="meta-line">
            <span className="meta-chip">{route.duration}</span>
            <span className="meta-chip">{Math.round(distance)} км</span>
            <span className="meta-chip">{estimateTravelTime(distance, route.transport)}</span>
          </div>
        </div>
      </button>
    </article>
  );
}

function RoutePage({ id, onNavigate }: any) {
  const routes = getAllRoutes(data.regions);
  const initialId = id || routes[0].id;
  const [routeId, setRouteId] = useState(initialId);

  useEffect(() => setRouteId(initialId), [initialId]);

  const route = getRouteById(data.regions, routeId);
  const distance = calculateRouteDistance(route.stops);
  const time = estimateTravelTime(distance, route.transport);

  const selectRoute = (value: string) => {
    setRouteId(value);
    window.history.replaceState({}, "", buildUrl("route", { id: value }));
  };

  return (
    <main className="page">
      <header className="page-header">
        <span className="eyebrow">Leaflet Routing Machine</span>
        <h1 className="page-title">Построение маршрута по Кыргызстану</h1>
        <p className="page-lead">Выберите готовый маршрут: карта построит линию пути, покажет остановки, расстояние и расчетное время поездки.</p>
      </header>

      <section className="section route-layout" style={{ paddingTop: 0 }}>
        <div className="glass-panel route-builder">
          <div className="form-row">
            <label>Маршрут</label>
            <select value={route.id} onChange={(event) => selectRoute(event.target.value)}>
              {routes.map((item: any) => <option key={item.id} value={item.id}>{item.name} · {item.regionName}</option>)}
            </select>
          </div>
          <p>{route.description}</p>
          <div className="route-metrics">
            <div className="route-metric"><span>Расстояние</span><strong>{Math.round(distance)} км</strong></div>
            <div className="route-metric"><span>Время поездки</span><strong>{time}</strong></div>
          </div>
          <ul className="stop-list">
            {route.stops.map((stop: any, index: number) => (
              <li key={`${stop.name}-${index}`}><span className="stop-number">{index + 1}</span><strong>{stop.name}</strong></li>
            ))}
          </ul>
          <div className="page-actions">
            <AppLink to={buildUrl("region", { id: route.regionId })} onNavigate={onNavigate} className="btn btn-dark">Открыть регион</AppLink>
            <AppLink to={buildUrl("regions")} onNavigate={onNavigate} className="btn btn-ghost">К карте областей</AppLink>
          </div>
        </div>
        <LeafletPanel mapKey={`route-${route.id}`} mode="route" route={route} />
      </section>
    </main>
  );
}

function CommentsBlock({ entityKey, baseRating }: any) {
  const [items, setItems] = useState<any[]>(() => getComments(entityKey));
  const [form, setForm] = useState({ name: "", rating: "5", text: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    setItems(getComments(entityKey));
    setForm({ name: "", rating: "5", text: "" });
    setError("");
  }, [entityKey]);

  const submit = (event: any) => {
    event.preventDefault();
    if (!form.name.trim() || !form.text.trim()) {
      setError("Введите имя и текст отзыва");
      return;
    }
    addComment(entityKey, form);
    setItems(getComments(entityKey));
    setForm({ name: "", rating: "5", text: "" });
    setError("");
  };

  const rating = averageRating(baseRating, items);

  return (
    <div className="glass-panel comment-panel">
      <div className="rating"><Stars value={rating} /> {formatRating(rating)} · {items.length ? pluralizeReviews(items.length) : "пока нет отзывов"}</div>
      <form className="comment-form" onSubmit={submit}>
        <input value={form.name} placeholder="Ваше имя" onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
        <select value={form.rating} onChange={(event) => setForm((current) => ({ ...current, rating: event.target.value }))}>
          <option value="5">5 звезд - отлично</option>
          <option value="4">4 звезды - хорошо</option>
          <option value="3">3 звезды - нормально</option>
          <option value="2">2 звезды - не понравилось</option>
          <option value="1">1 звезда - плохо</option>
        </select>
        <textarea value={form.text} placeholder="Расскажите, что понравилось и что стоит знать другим путешественникам" rows={4} onChange={(event) => setForm((current) => ({ ...current, text: event.target.value }))} />
        {error && <span className="field-error">{error}</span>}
        <button className="btn btn-dark" type="submit">Добавить отзыв</button>
      </form>

      <div className="comment-list">
        {items.map((item: any, index: number) => (
          <article className="comment-item" key={item.id || `${item.name}-${index}`}>
            <strong>{item.name}<span><Stars value={item.rating} /> {item.date}</span></strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function LeafletPanel({ mapKey, mode, regions = [], region, place, route, onNavigate }: any) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Leaflet работает напрямую с DOM, поэтому карта создается после отрисовки контейнера React.
    const center = place?.coordinates || region?.center || route?.stops?.[0]?.coordinates || kyrgyzstanCenter;
    const zoom = mode === "place" ? 12 : mode === "regions" ? 6 : 8;
    const map = createBaseMap(L, elementRef.current, center, zoom);
    const controls: any[] = [];

    if (mode === "regions") {
      regions.forEach((item: any) => {
        const marker = L.marker(item.center, { icon: createDivIcon(L, item.name.slice(0, 2), item.accent) }).addTo(map);
        marker.bindPopup(`<strong>${item.name}</strong><br>${item.shortDescription}`);
        marker.on("click", () => onNavigate(buildUrl("region", { id: item.id })));
        controls.push(marker);
      });
    }

    if (mode === "region" && region) {
      region.places.forEach((item: any) => {
        const marker = L.marker(item.coordinates, { icon: createDivIcon(L, item.name.slice(0, 2), region.accent) }).addTo(map);
        marker.bindPopup(`<strong>${item.name}</strong><br>${item.category}`);
        controls.push(marker);
      });
      fitMapToStops(L, map, region.places.map((item: any) => ({ coordinates: item.coordinates })));
    }

    if (mode === "place" && place) {
      const marker = L.marker(place.coordinates, { icon: createDivIcon(L, place.name.slice(0, 2), "#b91c1c") }).addTo(map);
      marker.bindPopup(`<strong>${place.name}</strong><br>${place.openingHours}`).openPopup();
      controls.push(marker);
    }

    if (mode === "route" && route) {
      route.stops.forEach((stop: any, index: number) => {
        const marker = L.marker(stop.coordinates, { icon: createDivIcon(L, String(index + 1), route.accent || "#b91c1c") }).addTo(map);
        marker.bindPopup(`<strong>${index + 1}. ${stop.name}</strong>`);
        controls.push(marker);
      });

      const fallbackLine = addFallbackRoute(L, map, route.stops, route.accent || "#b91c1c");
      if (fallbackLine) controls.push(fallbackLine);

      const routing = (L as any).Routing;
      if (routing?.control && route.stops.length > 1) {
        try {
          const control = routing.control({
            waypoints: route.stops.map((stop: any) => L.latLng(stop.coordinates[0], stop.coordinates[1])),
            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            show: false,
            createMarker: () => null,
            lineOptions: {
              styles: [{ color: route.accent || "#b91c1c", opacity: 0.85, weight: 6 }]
            }
          }).addTo(map);
          controls.push(control);
        } catch {
          fitMapToStops(L, map, route.stops);
        }
      }
    }

    window.setTimeout(() => map.invalidateSize(), 120);

    return () => {
      controls.forEach((control) => {
        try {
          if (control.remove) control.remove();
          else map.removeLayer(control);
        } catch {
          // Защитная очистка нужна, потому что Leaflet Routing Machine управляет внутренними слоями.
        }
      });
      map.remove();
    };
  }, [mapKey]);

  return (
    <div className="map-shell">
      <div ref={elementRef} className="leaflet-map" />
    </div>
  );
}

export default function App() {
  const [view, setView] = useState(() => parseView());
  const [user, setUser] = useState(() => getActiveUser());

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setView(parseView());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handlePop = () => setView(parseView());
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  useEffect(() => {
    const page = view.page;
    let title = data.site.name;
    if (page === "region") title = getRegionById(data.regions, view.params.get("id")).name;
    if (page === "place") title = getPlaceById(data.regions, view.params.get("id")).name;
    if (page === "route") title = getRouteById(data.regions, view.params.get("id")).name;
    updateDocumentTitle(page, title);
  }, [view]);

  const page = useMemo(() => {
    const id = view.params.get("id");
    if (view.page === "login") return <AuthPage mode="login" onNavigate={navigate} onUser={setUser} />;
    if (view.page === "register") return <AuthPage mode="register" onNavigate={navigate} onUser={setUser} />;
    if (view.page === "regions") return <RegionsPage onNavigate={navigate} />;
    if (view.page === "region") return <RegionPage id={id} onNavigate={navigate} />;
    if (view.page === "place") return <PlacePage id={id} onNavigate={navigate} />;
    if (view.page === "route") return <RoutePage id={id} onNavigate={navigate} />;
    return <HomePage onNavigate={navigate} />;
  }, [view]);

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <div className="app-shell">
      <Navigation view={view} user={user} onNavigate={navigate} onLogout={logout} />
      <AnimatePresence mode="wait">
        <motion.div key={`${view.page}-${view.params.get("id") || "main"}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
          {page}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}