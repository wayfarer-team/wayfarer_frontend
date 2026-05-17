export const pageLabels = {
  home: "Главная",
  login: "Войти",
  register: "Регистрация",
  regions: "Карта",
  region: "Область",
  place: "Место",
  route: "Маршрут"
};

const fileByPage = {
  home: "/index.html",
  login: "/login.html",
  register: "/register.html",
  regions: "/regions.html",
  region: "/region.html",
  place: "/place.html",
  route: "/route.html"
};

export function buildUrl(page, params = {}) {
  const url = new URL(fileByPage[page] || "/index.html", window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });
  return `${url.pathname}${url.search}`;
}

export function parseView() {
  const path = window.location.pathname.toLowerCase();
  const params = new URLSearchParams(window.location.search);

  if (path.endsWith("/login.html")) return { page: "login", params };
  if (path.endsWith("/register.html")) return { page: "register", params };
  if (path.endsWith("/regions.html")) return { page: "regions", params };
  if (path.endsWith("/region.html")) return { page: "region", params };
  if (path.endsWith("/place.html")) return { page: "place", params };
  if (path.endsWith("/route.html")) return { page: "route", params };
  return { page: "home", params };
}

export function updateDocumentTitle(page, title) {
  document.title = title ? `${title} | Сапар KG` : `${pageLabels[page] || "Путешествие"} | Сапар KG`;
}

export function formatRating(value) {
  return Number(value || 0).toFixed(1).replace(".", ",");
}

export function pluralizeReviews(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} отзыв`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} отзыва`;
  return `${count} отзывов`;
}

export function normalizeText(value) {
  return String(value || "").toLowerCase().trim();
}