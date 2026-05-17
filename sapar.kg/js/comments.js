const COMMENTS_KEY = "travel_kg_comments";

const seedComments = {
  "region:issyk-kul": [
    { name: "Айсулуу", rating: 5, text: "Южный берег оказался самым красивым направлением для семьи.", date: "2026-05-03" },
    { name: "Максим", rating: 5, text: "Маршрут удобный, особенно понравились Джеты-Огуз и Каракол.", date: "2026-05-08" }
  ],
  "place:ala-archa": [
    { name: "Нурбек", rating: 5, text: "Доехали быстро из Бишкека, тропа к водопаду очень живописная.", date: "2026-04-20" }
  ]
};

function readComments() {
  try {
    return JSON.parse(localStorage.getItem(COMMENTS_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeComments(value) {
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(value));
}

export function getComments(entityKey) {
  const stored = readComments();
  return [...(seedComments[entityKey] || []), ...(stored[entityKey] || [])];
}

export function addComment(entityKey, comment) {
  const stored = readComments();
  const nextComment = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name: comment.name.trim(),
    rating: Number(comment.rating),
    text: comment.text.trim(),
    date: new Date().toISOString().slice(0, 10)
  };
  stored[entityKey] = [nextComment, ...(stored[entityKey] || [])];
  writeComments(stored);
  return nextComment;
}

export function averageRating(baseRating, comments) {
  if (!comments.length) return baseRating;
  const total = comments.reduce((sum, item) => sum + Number(item.rating || 0), 0);
  return (baseRating + total / comments.length) / 2;
}