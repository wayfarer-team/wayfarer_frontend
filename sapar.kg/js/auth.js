const USERS_KEY = "travel_kg_users";
const SESSION_KEY = "travel_kg_session";

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getActiveUser() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
}

export function validateLogin(values) {
  const errors = {};
  if (!values.email?.trim()) errors.email = "Введите электронную почту";
  if (!values.password?.trim()) errors.password = "Введите пароль";
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Введите корректный email";
  return errors;
}

export function validateRegister(values) {
  const errors = validateLogin(values);
  if (!values.name?.trim()) errors.name = "Введите имя";
  if (!values.city?.trim()) errors.city = "Укажите город";
  if (values.password && values.password.length < 6) errors.password = "Пароль должен быть не короче 6 символов";
  if (values.password !== values.confirmPassword) errors.confirmPassword = "Пароли не совпадают";
  return errors;
}

export function registerUser(values) {
  const users = readUsers();
  const exists = users.some((user) => user.email.toLowerCase() === values.email.toLowerCase());
  if (exists) {
    return { ok: false, message: "Пользователь с таким email уже зарегистрирован" };
  }

  const user = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name: values.name.trim(),
    email: values.email.trim(),
    city: values.city.trim(),
    createdAt: new Date().toISOString()
  };

  users.push({ ...user, password: values.password });
  writeUsers(users);
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return { ok: true, user, message: "Регистрация завершена. Добро пожаловать!" };
}

export function loginUser(values) {
  const users = readUsers();
  const user = users.find(
    (item) => item.email.toLowerCase() === values.email.toLowerCase() && item.password === values.password
  );

  if (!user) {
    return { ok: false, message: "Email или пароль указаны неверно" };
  }

  const publicUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    city: user.city,
    createdAt: user.createdAt
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser));
  return { ok: true, user: publicUser, message: "Вы успешно вошли" };
}