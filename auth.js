// ========================================
// ПРОСТАЯ РАБОЧАЯ ВЕРСИЯ AUTH.JS
// ========================================

// проверка

// Получаем URL из config.js
const API_URL = window.API_URL || 'https://wayfarer-backend-ya6l.onrender.com';

// Система авторизации
const Auth = {
    user: JSON.parse(localStorage.getItem('wayfarer_user')) || null,

    // Регистрация
    async register(name, email, password) {
        console.log('🟢 Регистрация:', { name, email });
        
        try {
            const response = await fetch(`${API_URL}/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: name,
                    email: email,
                    password: password
                })
            });
            
            console.log('🟢 Статус ответа:', response.status);
            const data = await response.json();
            console.log('🟢 Ответ сервера:', data);
            
            if (response.ok && data.id) {
                this.user = {
                    id: data.id,
                    name: name,
                    email: email
                };
                localStorage.setItem('wayfarer_user', JSON.stringify(this.user));
                return { success: true, message: 'Регистрация успешна!' };
            } else {
                return { success: false, message: data.error || 'Ошибка регистрации' };
            }
        } catch (error) {
            console.error('🔴 Ошибка регистрации:', error);
            return { success: false, message: 'Сервер недоступен: ' + error.message };
        }
    },

    // Вход
    async login(email, password) {
        console.log('🟢 Вход:', { email });
        
        try {
            const response = await fetch(`${API_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            
            console.log('🟢 Статус ответа:', response.status);
            const data = await response.json();
            console.log('🟢 Ответ сервера:', data);
            
            if (response.ok && data.id) {
                this.user = {
                    id: data.id,
                    name: data.username || data.name,
                    email: email
                };
                localStorage.setItem('wayfarer_user', JSON.stringify(this.user));
                return { success: true, message: 'Добро пожаловать!' };
            } else {
                return { success: false, message: data.error || 'Неверный email или пароль' };
            }
        } catch (error) {
            console.error('🔴 Ошибка входа:', error);
            return { success: false, message: 'Сервер недоступен' };
        }
    },

    logout() {
        this.user = null;
        localStorage.removeItem('wayfarer_user');
        location.reload();
    },

    isLoggedIn() {
        return this.user !== null;
    },

    getCurrentUser() {
        return this.user;
    }
};

// Обновление UI
function updateAuthUI() {
    const btn = document.getElementById('authBtn');
    if (!btn) return;
    
    if (Auth.isLoggedIn()) {
        btn.innerHTML = `
            <div style="display:flex;align-items:center;gap:10px">
                <span style="color:#e8c06a">👤 ${Auth.user.name}</span>
                <button onclick="Auth.logout()" style="background:#c0182a;border:none;padding:5px 12px;color:white;cursor:pointer;border-radius:5px">Выход</button>
            </div>
        `;
        const tripsLink = document.getElementById('tripsLink');
        if (tripsLink) tripsLink.style.display = 'inline-block';
    } else {
        btn.innerHTML = `<button onclick="showAuthModal()" style="background:#c0182a;border:none;padding:8px 20px;color:white;cursor:pointer;border-radius:20px">Вход / Регистрация</button>`;
    }
}

// Модальное окно
function showAuthModal() {
    const modal = document.createElement('div');
    modal.id = 'authModal';
    modal.style.cssText = `
        position:fixed;top:0;left:0;width:100%;height:100%;
        background:rgba(0,0,0,0.8);display:flex;align-items:center;
        justify-content:center;z-index:1000
    `;
    modal.innerHTML = `
        <div style="background:#f5efe2;padding:30px;width:380px;border-radius:16px;border-top:4px solid #c0182a">
            <h2 style="margin-bottom:20px;color:#2d1a0e">Вход / Регистрация</h2>
            <div id="modalContent">
                ${getLoginForm()}
            </div>
        </div>
    `;
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    document.body.appendChild(modal);
}

function getLoginForm() {
    return `
        <form onsubmit="handleLogin(event)">
            <input type="email" id="email" placeholder="Email" required style="width:100%;padding:12px;margin-bottom:15px;border-radius:8px;border:1px solid #d4b16a">
            <input type="password" id="password" placeholder="Пароль" required style="width:100%;padding:12px;margin-bottom:15px;border-radius:8px;border:1px solid #d4b16a">
            <button type="submit" style="width:100%;padding:12px;background:#8b1e2d;color:white;border:none;border-radius:8px;cursor:pointer">Войти</button>
            <p style="text-align:center;margin-top:15px">Нет аккаунта? <a href="#" onclick="switchToRegister(event)" style="color:#c8972a">Регистрация</a></p>
        </form>
    `;
}

function getRegisterForm() {
    return `
        <form onsubmit="handleRegister(event)">
            <input type="text" id="name" placeholder="Имя" required style="width:100%;padding:12px;margin-bottom:15px;border-radius:8px;border:1px solid #d4b16a">
            <input type="email" id="email" placeholder="Email" required style="width:100%;padding:12px;margin-bottom:15px;border-radius:8px;border:1px solid #d4b16a">
            <input type="password" id="password" placeholder="Пароль" required style="width:100%;padding:12px;margin-bottom:15px;border-radius:8px;border:1px solid #d4b16a">
            <button type="submit" style="width:100%;padding:12px;background:#8b1e2d;color:white;border:none;border-radius:8px;cursor:pointer">Зарегистрироваться</button>
            <p style="text-align:center;margin-top:15px">Уже есть аккаунт? <a href="#" onclick="switchToLogin(event)" style="color:#c8972a">Войти</a></p>
        </form>
    `;
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const result = await Auth.login(email, password);
    alert(result.message);
    if (result.success) {
        document.getElementById('authModal')?.remove();
        updateAuthUI();
        location.href = 'attractions.html';
    }
}

async function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const result = await Auth.register(name, email, password);
    alert(result.message);
    if (result.success) {
        document.getElementById('modalContent').innerHTML = getLoginForm();
    }
}

function switchToRegister(e) {
    e.preventDefault();
    document.getElementById('modalContent').innerHTML = getRegisterForm();
}

function switchToLogin(e) {
    e.preventDefault();
    document.getElementById('modalContent').innerHTML = getLoginForm();
}

// Экспорт глобальных функций
window.Auth = Auth;
window.updateAuthUI = updateAuthUI;
window.showAuthModal = showAuthModal;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.switchToRegister = switchToRegister;
window.switchToLogin = switchToLogin;

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', updateAuthUI);