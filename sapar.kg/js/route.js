const EARTH_RADIUS_KM = 6371;

function toRadians(value) {
  return (value * Math.PI) / 180;
}

export function distanceBetween(a, b) {
  const latDelta = toRadians(b[0] - a[0]);
  const lonDelta = toRadians(b[1] - a[1]);
  const lat1 = toRadians(a[0]);
  const lat2 = toRadians(b[0]);
  const h =
    Math.sin(latDelta / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(lonDelta / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h));
}

export function calculateRouteDistance(stops) {
  return stops.reduce((sum, stop, index) => {
    if (index === 0) return sum;
    return sum + distanceBetween(stops[index - 1].coordinates, stop.coordinates);
  }, 0);
}

export function estimateTravelTime(distanceKm, transport = "авто") {
  const speed = transport.includes("пеш") ? 5 : transport.includes("внедорож") ? 42 : 58;
  const hours = distanceKm / speed;
  const roundedHours = Math.floor(hours);
  const minutes = Math.round((hours - roundedHours) * 60);
  if (roundedHours <= 0) return `${Math.max(minutes, 10)} мин`;
  return `${roundedHours} ч ${minutes} мин`;
}

export function routeStopsToLatLng(stops) {
  return stops.map((stop) => [stop.coordinates[0], stop.coordinates[1]]);
}