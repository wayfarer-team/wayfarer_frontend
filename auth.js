// Система регистрации и авторизации
const Auth = {
  users: JSON.parse(localStorage.getItem('wayfarer_users')) || {},
  currentUser: JSON.parse(localStorage.getItem('wayfarer_current_user')) || null,

  register(email, password, name) {
    if (this.users[email]) return { success: false, message: 'Пользователь уже существует' };
    this.users[email] = { password, name, trips: [] };
    localStorage.setItem('wayfarer_users', JSON.stringify(this.users));
    return { success: true, message: 'Успешно зарегистрирован' };
  },

  login(email, password) {
    const user = this.users[email];
    if (!user || user.password !== password) {
      return { success: false, message: 'Неверный email или пароль' };
    }
    this.currentUser = { email, name: user.name, trips: user.trips };
    localStorage.setItem('wayfarer_current_user', JSON.stringify(this.currentUser));
    return { success: true, message: 'Успешно вошли' };
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem('wayfarer_current_user');
  },

  isLoggedIn() {
    return this.currentUser !== null;
  },

  getCurrentUser() {
    return this.currentUser;
  },

  addTrip(trip) {
    if (!this.currentUser) return false;
    const email = this.currentUser.email;
    this.users[email].trips.push(trip);
    this.currentUser.trips.push(trip);
    localStorage.setItem('wayfarer_users', JSON.stringify(this.users));
    localStorage.setItem('wayfarer_current_user', JSON.stringify(this.currentUser));
    return true;
  },

  getTrips() {
    return this.currentUser?.trips || [];
  }
};

function showAuthModal(type = 'login') {
  const html = `
    <div class="auth-modal-overlay" id="authModalOverlay" onclick="closeAuthModal()">
      <div class="auth-modal" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeAuthModal()">✕</button>
        <div id="authContainer">
          ${type === 'login' ? getLoginForm() : getRegisterForm()}
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', html);
}

function getLoginForm() {
  return `
    <h2>Вход</h2>
    <form onsubmit="handleLogin(event)">
      <input type="email" id="loginEmail" placeholder="Email" required>
      <input type="password" id="loginPassword" placeholder="Пароль" required>
      <button type="submit" class="btn-auth">Войти</button>
      <p style="text-align: center; margin-top: 1rem;">
        Нет аккаунта? <a href="#" onclick="switchAuthForm(event, 'register')" style="color: var(--gold); cursor: pointer;">Зарегистрироваться</a>
      </p>
    </form>
  `;
}

function getRegisterForm() {
  return `
    <h2>Регистрация</h2>
    <form onsubmit="handleRegister(event)">
      <input type="text" id="regName" placeholder="Ваше имя" required>
      <input type="email" id="regEmail" placeholder="Email" required>
      <input type="password" id="regPassword" placeholder="Пароль" required>
      <button type="submit" class="btn-auth">Зарегистрироваться</button>
      <p style="text-align: center; margin-top: 1rem;">
        Уже есть аккаунт? <a href="#" onclick="switchAuthForm(event, 'login')" style="color: var(--gold); cursor: pointer;">Войти</a>
      </p>
    </form>
  `;
}

function switchAuthForm(e, type) {
  e.preventDefault();
  document.getElementById('authContainer').innerHTML = type === 'login' ? getLoginForm() : getRegisterForm();
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const result = Auth.login(email, password);
  alert(result.message);
  if (result.success) {
    closeAuthModal();
    location.reload();
  }
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const result = Auth.register(email, password, name);
  alert(result.message);
  if (result.success) {
    document.getElementById('authContainer').innerHTML = getLoginForm();
  }
}

function closeAuthModal() {
  const overlay = document.getElementById('authModalOverlay');
  if (overlay) overlay.remove();
}

function updateAuthUI() {
  const authBtn = document.getElementById('authBtn');
  if (!authBtn) return;

  if (Auth.isLoggedIn()) {
    const user = Auth.getCurrentUser();
    authBtn.innerHTML = `${user.name} <button class="logout-btn" onclick="handleLogout()">Выход</button>`;
  } else {
    authBtn.innerHTML = '<a href="register.html" style="color: var(--white); text-decoration: none;"><button class="login-btn" style="cursor: pointer;">Вход</button></a>';
  }
}

function handleLogout() {
  Auth.logout();
  location.reload();
}

document.addEventListener('DOMContentLoaded', updateAuthUI);
