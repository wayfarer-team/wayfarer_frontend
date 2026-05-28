const API_URL = "https://chatter-shortwave-vagrantly.ngrok-free.dev";

const Auth = {
  currentUser: null,

  async register(email, password, name) {
    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          name
        })
      });

      return await response.json();

    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Ошибка сервера"
      };
    }
  },

  async login(email, password) {
    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const result = await response.json();

      if (result.success) {
        this.currentUser = result.user;
      }

      return result;

    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Ошибка сервера"
      };
    }
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

  async getTrips() {
    try {
      const response = await fetch(`${API_URL}/api/trips`);
      return await response.json();

    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getEvents() {
    try {
      const response = await fetch(`${API_URL}/api/events`);
      return await response.json();

    } catch (error) {
      console.error(error);
      return [];
    }
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

async function handleLogin(e) {
  e.preventDefault();
  document.getElementById('authContainer').innerHTML = type === 'login' ? getLoginForm() : getRegisterForm();
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const result = await Auth.login(email, password);

  alert(result.message);

  if (result.success) {
    closeAuthModal();
    location.reload();
  }
}

async function handleRegister(e) {
  e.preventDefault();

  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  const result = await Auth.register(email, password, name);

  alert(result.message);

  if (result.success) {
    document.getElementById('authContainer').innerHTML = getLoginForm();
  }
}

function closeAuthModal() {
  const overlay = document.getElementById('authModalOverlay');

  if (overlay) {
    overlay.remove();
  }
}

function updateAuthUI() {
  const authBtn = document.getElementById('authBtn');

  if (!authBtn) return;

  if (Auth.isLoggedIn()) {
    const user = Auth.getCurrentUser();

    authBtn.innerHTML = `
      ${user?.name || "User"}
      <button class="logout-btn" onclick="handleLogout()">
        Выход
      </button>
    `;
  } else {
    authBtn.innerHTML = `
      <button class="login-btn" onclick="showAuthModal('login')">
        Вход
      </button>
    `;
  }
}

function handleLogout() {
  Auth.logout();
  location.reload();
}

document.addEventListener('DOMContentLoaded', updateAuthUI);
