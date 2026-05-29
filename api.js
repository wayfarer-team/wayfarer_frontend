const API_URL = "https://wayfarer-backend-ya6l.onrender.com";

async function request(url, options = {}) {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);

    return {
      success: false,
      message: "Ошибка сервера",
    };
  }
}

export function getTrips() {
  return request("/api/trips");
}

export function createTrip(data) {
  return request("/api/trips", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateTrip(id, data) {
  return request(`/api/trips${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export function getPlaces() {
  return request("/api/places");
}

export function getEvents() {
  return request("/api/events");
}

export function createEvent(data) {
  return request("/api/events", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function deleteEvent(id) {
  return request(`/api/events${id}`, {
    method: "DELETE",
  });
}

export function getRegions() {
  return request("/regions");
}

export function getAttractions() {
  return request("/attractions");
}
