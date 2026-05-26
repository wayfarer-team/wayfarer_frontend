// ============================
//  WAYFARER KG — script.js
// ============================

// ---- ДАННЫЕ РЕГИОНОВ ----
const regions = [
  {
    id: "issyk-kul",
    name: "Иссык-Куль",
    tag: "Район Альпийского озера",
    desc: "Жемчужина Кыргызстана — огромное теплое альпийское озеро, окруженное заснеженными вершинами.",
    image: "images/issyk-kul.jpg",
    highlights: [
      "Озеро Иссык-Куль — второе по величине альпийское озеро в мире",
      "Петроглифы Чолпон-Ата (древние наскальные рисунки)",
      "Город Каракол — ворота в треккинг Тянь-Шаня",
      "Красные скалы Джети-Огуз",
      "Ущелья Григориевка и Семёновка"
    ],
    fullDesc: "Иссык-Куль, что означает «теплое озеро» на кыргызском, никогда не замерзает несмотря на высоту 1606м. Окруженное горами Тянь-Шаня, озеро простирается на 182км и является домом как курортам, так и древним тайнам. Петроглифы в Чолпон-Ате датируются тысячами лет назад."
  },
  {
    id: "bishkek",
    name: "Бишкек",
    tag: "Столица",
    desc: "Зелёная столица советской эпохи, смешивающая центральноазиатскую культуру с энергией горного города.",
    image: "images/bishkek.jpg",
    highlights: [
      "Площадь Ала-Тоо — сердце нации",
      "Базар Ош — ярмарка традиционного рынка",
      "Государственный исторический музей",
      "Площадь Победы и монумент",
      "Базар Дордой — один из крупнейших рынков Азии"
    ],
    fullDesc: "Бишкек — одна из самых спокойных и зелёных столиц Центральной Азии. Широкие советские бульвары встречаются с оживлёнными базарами, юрт-кафе и галереями кыргызского войлочного искусства. Это идеальная база для изучения страны с комфортными удобствами."
  },
  {
    id: "naryn",
    name: "Нарын",
    tag: "Сердце кочевников",
    desc: "Бесконечная высокогорная степь, где кочевая жизнь продолжается так же, как столетия назад.",
    image: "images/naryn.jpg",
    highlights: [
      "Озеро Сон-Куль — самое зрелищное место для кемпинга в юртах",
      "Таш-Рабат — караван-сарай XV века на Великом Шёлковом пути",
      "Горный хребет Ат-Башы",
      "Живописный каньон ущелья Нарын",
      "Кочкор — деревня ремесла войлока"
    ],
    fullDesc: "Провинция Нарын — душа кочевого Кыргызстана. Дорога к Сон-Кулю ведёт мимо юрт-лагерей на зелёном плато на высоте 3016м. Летом сотни лошадей бродят свободно под открытым небом, и вы можете спать в традиционной юрте с местной семьёй."
  },
  {
    id: "osh",
    name: "Ош",
    tag: "Южная столица",
    desc: "Второй город Кыргызстана — одно из самых древних постоянно населённых мест Центральной Азии.",
    image: "images/osh.jpg",
    highlights: [
      "Гора Сулеймана — объект Всемирного наследия ЮНЕСКО",
      "Базар Ош — древний рынок Великого Шёлкового пути",
      "Минарет Узгена и мавзолеи",
      "Арсланбоб — священный лес грецкого ореха",
      "Горячие источники Джалал-Абада"
    ],
    fullDesc: "Ош старше 3000 лет и расположен на перекрёстке древних маршрутов Великого Шёлкового пути. Священная гора Сулеймана доминирует над горизонтом и почитается по всей Центральной Азии. Базар здесь — сенсорная перегрузка пряностей, сухофруктов и ручных текстилей."
  },
  {
    id: "talas",
    name: "Талас",
    tag: "Страна легендарного Манаса",
    desc: "Родина легендарного героя Манаса, земля холмистых холмов и древних курганов.",
    image: "images/talas.jpg",
    highlights: [
      "Мавзолей Манаса Ордо — святилище героя эпоса",
      "Туризм в ущелье Киртманак",
      "Археологические объекты древнего Великого Шёлкового пути",
      "Традиционные кыргызские конные фестивали",
      "Нетронутые альпийские луга (джайлоо)"
    ],
    fullDesc: "Талас — мало посещаемая, но глубоко значимая для кыргызской идентичности область. Это родина Манаса, легендарного героя самого длинного в мире эпического поэма. Древние курганы усеивают ландшафт, и комплекс Манаса Ордо является местом паломничества кыргызов со всей страны."
  },
  {
    id: "chui",
    name: "Долина Чуй",
    tag: "Северные предгорья",
    desc: "Плодородная сердцевина, соединяющая Бишкек с величественными вершинами Ала-Арча.",
    image: "images/chui.jpg",
    highlights: [
      "Национальный парк Ала-Арча — потрясающий горный треккинг",
      "Башня Бурана — древний минарет и музей под открытым небом",
      "Экотуризм в долине Чон-Кемин",
      "Петроглифы у перевала Кызарт",
      "Ботанический заповедник Сокулук"
    ],
    fullDesc: "Долина Чуй охватывает Бишкек и ведёт в горный хребет Киргизский Ала-Тоо. Национальный парк Ала-Арча — лёгкий однодневный отдых из столицы с драматичными ущельями, ледниками и альпийскими лугами. Древняя башня Бурана — остаток великого города Великого Шёлкового пути Баласагуна."
  }
];

// ---- ДАННЫЕ ДОСТОПРИМЕЧАТЕЛЬНОСТЕЙ ----
const attractions = [
  {
    icon: "🏔",
    num: "01",
    title: "Пик Хан-Тенгри",
    tag: "Альпинизм",
    desc: "Одна из красивейших гор мира — мраморная пирамида высотой 7010м над уровнем моря. Вершина светится красным на закате, откуда идёт имя «Повелитель неба»."
  },
  {
    icon: "🌊",
    num: "02",
    title: "Озеро Сон-Куль",
    tag: "Опыт кочевников",
    desc: "Драгоценное жёлто-голубое озеро на высоте 3016м, окружённое летними пастбищами, где кыргызские пастухи приносят свои юрты. Млечный путь здесь как ничто иное."
  },
  {
    icon: "🏛",
    num: "03",
    title: "Таш-Рабат",
    tag: "История Великого Шёлкового пути",
    desc: "Замечательно сохранённый каменный караван-сарай XV века, скрытый в удалённой горной долине. Купцы когда-то укрывались здесь на древних торговых маршрутах между Востоком и Западом."
  },
  {
    icon: "⛰",
    num: "04",
    title: "Каньон Ала-Арча",
    tag: "Треккинг",
    desc: "Национальный парк всего в 40км от Бишкека с ледниками, ревущими реками и высокогорными вершинами. Рай для туристов и альпинистов всех уровней."
  },
  {
    icon: "🦅",
    num: "05",
    title: "Соколиная охота",
    tag: "Культурное наследие",
    desc: "Смотрите, как мастера Беркутчи работают с золотыми орлами так же, как их предки 4000 лет назад. Всемирные кочевые игры, проводимые в Кыргызстане, празднуют это и десятки других древних навыков."
  },
  {
    icon: "🌋",
    num: "06",
    title: "Скалы Джети-Огуз",
    tag: "Природное чудо",
    desc: "Семь ярко-красных песчаниковых образований, называемые «Семь быков», резко возвышаются над зелёной долиной рядом с Караколом. Священное место, вплетённое в кыргызскую фольклорную легенду."
  }
];

// ---- РЕНДЕР РЕГИОНОВ ----
function renderRegions() {
  const grid = document.getElementById('regionsGrid');
  if (!grid) return;
  regions.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'region-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="region-card-img" style="background-image:url('${r.image}'); background-color: var(--mid)"></div>
      <div class="region-card-overlay"></div>
      <div class="region-card-body">
        <p class="region-card-tag">${r.tag}</p>
        <h3 class="region-card-title">${r.name}</h3>
        <p class="region-card-desc">${r.desc}</p>
        <span class="region-card-cta">Узнать больше →</span>
      </div>
    `;
    card.addEventListener('click', () => openRegionPage(r.id));
    grid.appendChild(card);
  });
}

function openRegionPage(regionId) {
  sessionStorage.setItem('selectedRegion', regionId);
  window.location.href = 'region-detail.html';
}

// ---- РЕНДЕР ДОСТОПРИМЕЧАТЕЛЬНОСТЕЙ ----
function renderAttractions() {
  const grid = document.getElementById('attractionsGrid');
  if (!grid) return;
  attractions.forEach((a, i) => {
    const card = document.createElement('div');
    card.className = 'attraction-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="attraction-num">${a.num}</div>
      <div class="attraction-icon">${a.icon}</div>
      <h3 class="attraction-title">${a.title}</h3>
      <p class="attraction-desc">${a.desc}</p>
      <span class="attraction-tag">${a.tag}</span>
    `;
    grid.appendChild(card);
  });
}

// ---- МОДАЛЬНОЕ ОКНО ----
function openModal(region) {
  document.getElementById('modalImg').style.backgroundImage = `url('${region.image}')`;
  document.getElementById('modalTag').textContent = region.tag;
  document.getElementById('modalTitle').textContent = region.name;
  document.getElementById('modal').querySelector('p').textContent = region.fullDesc;

  const ul = document.getElementById('modalHighlights');
  ul.innerHTML = '';
  region.highlights.forEach(h => {
    const li = document.createElement('li');
    li.textContent = h;
    ul.appendChild(li);
  });

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ---- ПРОКРУТКА НАВБАРА ----
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
});

// ---- МОБИЛЬНОЕ МЕНЮ ----
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('open');
  }
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.remove('open');
    }
  });
});

// ---- INTERSECTION OBSERVER (прокрутка показывает) ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeRevealElements() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- ПЛАН И КУЛЬТУРА ----
function addRevealToStatic() {
  document.querySelectorAll('.plan-card, .culture-img, .strip-item').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.1}s`;
  });
}

// ---- ИНИЦИАЛИЗАЦИЯ ----
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('regionsGrid')) {
    renderRegions();
  }
  if (document.getElementById('attractionsGrid')) {
    renderAttractions();
  }
  addRevealToStatic();
  setTimeout(observeRevealElements, 50);
});
