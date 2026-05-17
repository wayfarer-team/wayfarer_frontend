export const kyrgyzstanCenter = [41.2044, 74.7661];

export function createBaseMap(L, element, center = kyrgyzstanCenter, zoom = 6) {
  const map = L.map(element, {
    zoomControl: true,
    scrollWheelZoom: false,
    attributionControl: true
  }).setView(center, zoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  return map;
}

export function createDivIcon(L, label, accent = "#b91c1c") {
  return L.divIcon({
    className: "kg-marker",
    html: `<span style="--marker-color:${accent}">${label}</span>`,
    iconSize: [42, 42],
    iconAnchor: [21, 21]
  });
}

export function fitMapToStops(L, map, stops) {
  if (!stops.length) return;
  const bounds = L.latLngBounds(stops.map((stop) => stop.coordinates));
  map.fitBounds(bounds, { padding: [44, 44], maxZoom: 10 });
}

export function addFallbackRoute(L, map, stops, color = "#b91c1c") {
  if (stops.length < 2) return null;
  const line = L.polyline(stops.map((stop) => stop.coordinates), {
    color,
    weight: 5,
    opacity: 0.8,
    dashArray: "10 12"
  }).addTo(map);
  fitMapToStops(L, map, stops);
  return line;
}