const API_URL =
  "https://wayfarer-backend-ya6l.onrender.com";

async function request(url) {

  try {

    const response = await fetch(`${API_URL}${url}`);

    return await response.json();

  } catch(error) {

    console.error(error);

    return [];

  }

}

export function getTrips() {
  return request(`${API_URL}/api/trips`);
}

export function getRegions() {
  return request(`${API_URL}/regions`);
}

export function getAttractions(region) {
  return request(
    `${API_URL}/attractions/${region}`
  );
}