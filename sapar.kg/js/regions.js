import { normalizeText } from "./app.js";

export function getRegionById(regions, id) {
  return regions.find((region) => region.id === id) || regions[0];
}

export function getAllPlaces(regions) {
  return regions.flatMap((region) =>
    region.places.map((place) => ({ ...place, regionId: region.id, regionName: region.name, regionImage: region.image }))
  );
}

export function getAllRoutes(regions) {
  return regions.flatMap((region) =>
    region.routes.map((route) => ({ ...route, regionId: region.id, regionName: region.name, accent: region.accent }))
  );
}

export function getPlaceById(regions, id) {
  return getAllPlaces(regions).find((place) => place.id === id) || getAllPlaces(regions)[0];
}

export function getRouteById(regions, id) {
  return getAllRoutes(regions).find((route) => route.id === id) || getAllRoutes(regions)[0];
}

export function searchRegions(regions, query) {
  const value = normalizeText(query);
  if (!value) return regions;
  return regions.filter((region) => {
    const haystack = [
      region.name,
      region.type,
      region.shortDescription,
      region.description,
      ...(region.bestFor || []),
      ...region.places.map((place) => place.name)
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(value);
  });
}

export function getRegionHighlights(region) {
  return [
    `${region.places.length} достопримечательности`,
    `${region.hotels.length} варианта проживания`,
    `${region.cafes.length} кафе`,
    region.season
  ];
}