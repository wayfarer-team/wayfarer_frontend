PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS regions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name_ru TEXT NOT NULL,
  name_en TEXT,
  overview TEXT,
  highlight TEXT,
  image_url TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS places (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  region_id INTEGER NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  name_ru TEXT NOT NULL,
  name_en TEXT,
  category TEXT,
  overview TEXT,
  details TEXT,
  image_url TEXT,
  best_season TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY(region_id) REFERENCES regions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS favorites (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  place_id INTEGER NOT NULL,
  added_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(place_id) REFERENCES places(id) ON DELETE CASCADE,
  UNIQUE(user_id, place_id)
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

INSERT INTO regions (slug, name_ru, name_en, overview, highlight, image_url) VALUES
('issykkul', 'Иссык-Куль', 'Issyk-Kul', 'Высокогорное озеро и курортный регион с пляжами, горячими источниками и альпинистскими тропами.', 'Озеро Иссык-Куль, Каньон Сказка, водопады и термальные источники.', 'https://images.pexels.com/photos/2102431/pexels-photo-2102431.jpeg'),
('bishkek', 'Бишкек', 'Bishkek', 'Столица Кыргызстана с парками, музеями и оживлённой культурной жизнью.', 'Современная городская инфраструктура, центральные площади и рынки.', 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg'),
('osh', 'Ош', 'Osh', 'Южная столица с 3000-летней историей, древними базарами и Сулайман-Тоо.', 'Древняя культура, оживлённые рынки и исторические памятники.', 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg'),
('naryn', 'Нарын', 'Naryn', 'Суровый горный край с озёрами и караван-сараями.', 'Высокогорье, национальные перевалы и спокойная природа.', 'https://images.pexels.com/photos/3331097/pexels-photo-3331097.jpeg'),
('jalalabad', 'Джалал-Абад', 'Jalal-Abad', 'Регион с ореховыми лесами, минеральными источниками и живописной природой.', 'Сары-Челек, горы и целебные воды.', 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg'),
('talas', 'Талас', 'Talas', 'Зелёные долины и исторические места, связанные с эпосом Манас.', 'Традиционная культура и живописные равнины.', 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg'),
('batken', 'Баткен', 'Batken', 'Юго-западный регион с абрикосовыми садами и горными ущельями.', 'Фрукты, каньоны и уникальный ландшафт.', 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg'),
('chuy', 'Чуй', 'Chuy', 'Плодородная долина с историческими памятниками и природными парками.', 'Ала-Арча, чайные плантации и живописные долины.', 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg');

INSERT INTO places (region_id, slug, name_ru, name_en, category, overview, details, image_url, best_season) VALUES
((SELECT id FROM regions WHERE slug = 'issykkul'), 'issykkul-lake', 'Озеро Иссык-Куль', 'Issyk-Kul Lake', 'Озеро', 'Озеро Иссык-Куль — жемчужина Кыргызстана, второе по величине высокогорное озеро в мире.', 'Белые пляжи, термальные источники и горные виды делают это место идеальным для летнего отдыха.', 'https://placehold.co/600x400/2563eb/white?text=Issyk-Kul', 'Лето'),
((SELECT id FROM regions WHERE slug = 'issykkul'), 'skazka', 'Каньон Сказка', 'Fairy Tale Canyon', 'Природа', 'Колоритный каньон с красными скалами и удивительными формами глин.', 'Каньон Сказка известен своим сказочным ландшафтом и живописными тропами для прогулок.', 'https://placehold.co/600x400/ff6f61/white?text=Skazka', 'Весна—Осень'),
((SELECT id FROM regions WHERE slug = 'issykkul'), 'jetioguz', 'Долина Жети-Огуз', 'Jeti-Oguz Valley', 'Долина', 'Долина с красными скалами, озёрами и легендарными сердцами камней.', 'Здесь можно пройти пешие маршруты, увидеть термальные источники и насладиться природой.', 'https://placehold.co/600x400/ef4444/white?text=Jeti-Oguz', 'Лето'),
((SELECT id FROM regions WHERE slug = 'issykkul'), 'altynarashan', 'Термальные источники Алтын-Арашан', 'Altyn-Arashan Springs', 'Горячие источники', 'Горячие источники среди хвойных лесов и горных рек.', 'Популярное место для трекинга и отдыха в окружении мощных горных пейзажей.', 'https://placehold.co/600x400/10b981/white?text=Altyn-Arashan', 'Лето—Осень'),
((SELECT id FROM regions WHERE slug = 'issykkul'), 'barskoon', 'Водопад Барскоон', 'Barskoon Waterfall', 'Водопад', 'Высокий горный водопад и живописное ущелье на юге Иссык-Кульской области.', 'Место для однодневных походов, пикников и фотографий на природе.', 'https://placehold.co/600x400/0ea5e9/white?text=Barskoon', 'Лето'),
((SELECT id FROM regions WHERE slug = 'chuy'), 'alaarcha', 'Нацпарк Ала-Арча', 'Ala-Archa National Park', 'Парк', 'Горное ущелье недалеко от Бишкека, популярное место для треккинга.', 'Ала-Арча сочетает в себе ледники, водопады и альпинистские маршруты.', 'https://placehold.co/600x400/0f766e/white?text=Ala-Archa', 'Лето'),
((SELECT id FROM regions WHERE slug = 'chuy'), 'burana', 'Башня Бурана', 'Burana Tower', 'История', 'Минарет XI века на месте древнего города Баласагун.', 'Археологический комплекс с древними балбалами и музеем под открытым небом.', 'https://placehold.co/600x400/6d28d9/white?text=Burana', 'Весна—Осень');

INSERT INTO users (username, email, password_hash) VALUES
('demo', 'demo@sapar.kg', '$2b$10$examplepasswordhash1234567890abcdefghijklmnop');

INSERT INTO favorites (user_id, place_id) VALUES
((SELECT id FROM users WHERE username = 'demo'), (SELECT id FROM places WHERE slug = 'alaarcha')),
((SELECT id FROM users WHERE username = 'demo'), (SELECT id FROM places WHERE slug = 'issykkul-lake'));

INSERT INTO contact_messages (name, email, subject, message) VALUES
('Аслан', 'ASLAN@example.com', 'Вопрос к сайту', 'Здравствуйте, хочу узнать о лучших маршрутах для осеннего путешествия в Кыргызстане.'),
('Нурсултан', 'Nursultan@example.com', 'Запрос на экскурсию', 'Планирую поездку на Иссык-Куль с семьёй. Какие варианты вы можете предложить?');