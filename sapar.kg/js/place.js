export function buildPlaceFacts(place) {
  return [
    { label: "Время работы", value: place.openingHours },
    { label: "Координаты", value: `${place.coordinates[0].toFixed(4)}, ${place.coordinates[1].toFixed(4)}` },
    { label: "Категория", value: place.category },
    { label: "Отзывы", value: `${place.reviews} на платформе` }
  ];
}

export function getSimilarPlaces(regions, place) {
  return regions
    .flatMap((region) => region.places.map((item) => ({ ...item, regionName: region.name })))
    .filter((item) => item.id !== place.id && item.category === place.category)
    .slice(0, 3);
}