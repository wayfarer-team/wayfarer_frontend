/* ============================================
   SAPAR KG - Main JavaScript
   Kyrgyzstan Tourism Website
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initBackToTop();
  initFavorites();
  initSearchFilter();
});

/* === Theme Toggle === */
function initTheme() {
  const savedTheme = localStorage.getItem('sapar-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  const toggleBtn = document.querySelector('.theme-toggle');
  if (!toggleBtn) return;
  
  updateThemeIcon(toggleBtn, savedTheme);
  
  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('sapar-theme', next);
    updateThemeIcon(toggleBtn, next);
  });
}

function updateThemeIcon(btn, theme) {
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/* === Navbar Scroll Effect === */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

/* === Mobile Menu === */
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav-links');
  if (!btn || !nav) return;
  
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('open');
  });
  
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      nav.classList.remove('open');
    });
  });
}

/* === Scroll Animations === */
function initScrollAnimations() {
  const items = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  
  items.forEach(item => observer.observe(item));
}

/* === Back to Top === */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* === Favorites System === */
function initFavorites() {
  document.querySelectorAll('.fav-btn').forEach(btn => {
    const placeId = btn.dataset.placeId;
    if (!placeId) return;
    
    const favs = getFavorites();
    if (favs.includes(placeId)) {
      btn.classList.add('active');
      btn.textContent = '❤️';
    } else {
      btn.textContent = '🤍';
    }
    
    btn.addEventListener('click', () => {
      toggleFavorite(placeId, btn);
    });
  });
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('sapar-favorites') || '[]');
  } catch { return []; }
}

function toggleFavorite(placeId, btn) {
  let favs = getFavorites();
  if (favs.includes(placeId)) {
    favs = favs.filter(id => id !== placeId);
    btn.classList.remove('active');
    btn.textContent = '🤍';
    showToast('Удалено из избранного', 'info');
  } else {
    favs.push(placeId);
    btn.classList.add('active');
    btn.textContent = '❤️';
    showToast('Добавлено в избранное', 'success');
  }
  localStorage.setItem('sapar-favorites', JSON.stringify(favs));
}

/* === Search & Filter === */
function initSearchFilter() {
  const searchInput = document.querySelector('.search-bar input');
  const cardsContainer = document.querySelector('[data-search-target]');
  if (!searchInput || !cardsContainer) return;
  
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const cards = cardsContainer.querySelectorAll('.card, .glass-card');
    
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
      if (text.includes(query)) {
        card.style.animation = 'fadeIn 0.3s ease';
      }
    });
  });
}

/* === Slider === */
function initSlider(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  const track = container.querySelector('.slider-track');
  const slides = track.querySelectorAll('.slider-slide');
  const prevBtn = container.querySelector('.slider-btn.prev');
  const nextBtn = container.querySelector('.slider-btn.next');
  const dotsContainer = container.querySelector('.slider-dots');
  
  let currentIndex = 0;
  let autoplayInterval;
  
  // Create dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }
  
  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.slider-dot').forEach((d, i) => {
        d.classList.toggle('active', i === index);
      });
    }
  }
  
  function nextSlide() { goToSlide((currentIndex + 1) % slides.length); }
  function prevSlide() { goToSlide((currentIndex - 1 + slides.length) % slides.length); }
  
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
  
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }
  
  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }
  
  // Touch support
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });
  
  track.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
      resetAutoplay();
    }
  });
  
  if (slides.length > 1) startAutoplay();
}

/* === Modal === */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const overlay = btn.closest('.modal-overlay');
      if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

/* === Tabs === */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll(
      '.tab-content[data-tab-group="' + (tabGroup.dataset.tabGroup || '') + '"]'
    );
    
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const target = btn.dataset.tab;
        contents.forEach(content => {
          content.classList.toggle('active', content.dataset.tab === target);
        });
      });
    });
  });
}

/* === Toast Notifications === */
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* === Lazy Loading Images === */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '100px' });
    
    lazyImages.forEach(img => observer.observe(img));
  } else {
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}

/* === AI Recommendation (simulated) === */
function getAIRecommendation() {
  const places = [
    { name: 'Озеро Сары-Челек', region: 'Джалал-Абад', reason: 'Кристально чистая вода и нетронутая природа' },
    { name: 'Каньон Сказка', region: 'Иссык-Куль', reason: 'Причудливые скальные формы и виды на озеро' },
    { name: 'Водопад Барскоон', region: 'Иссык-Куль', reason: 'Один из красивейших водопадов страны' },
    { name: 'Башня Бурана', region: 'Чуй', reason: 'Древний минарет с богатой историей' },
    { name: 'Гора Сулайман-Тоо', region: 'Ош', reason: 'Священная гора, включенная в список ЮНЕСКО' },
    { name: 'Ущелье Ала-Арча', region: 'Чуй', reason: 'Живописное ущелье недалеко от Бишкека' },
    { name: 'Перевал Тосор', region: 'Иссык-Куль', reason: 'Потрясающие панорамы гор и ущелий' },
    { name: 'Озеро Кель-Суу', region: 'Нарын', reason: 'Затерянное высокогорное озеро невероятной красоты' },
  ];
  
  return places[Math.floor(Math.random() * places.length)];
}

function displayAIRecommendation() {
  const container = document.querySelector('.ai-recommendation-target');
  if (!container) return;
  
  const rec = getAIRecommendation();
  container.innerHTML = `
    <div class="ai-banner animate-on-scroll">
      <span style="font-size:2rem;">🤖</span>
      <h3>AI рекомендует: ${rec.name}</h3>
      <p>${rec.reason} — находится в <strong>${rec.region}</strong></p>
      <button class="btn btn-gold" onclick="displayAIRecommendation()" style="margin-top:1rem;">
        🔄 Другое место
      </button>
    </div>
  `;
}

/* === Daily Random Place === */
function getDailyPlace() {
  const places = [
    { name: 'Джет-Огуз', desc: 'Ущелье красных скал, известное как "Семь быков"', img: '🏔️' },
    { name: 'Ала-Куль', desc: 'Высокогорное озеро с бирюзовой водой', img: '💎' },
    { name: 'Таш-Рабат', desc: 'Древний караван-сарай на Великом Шелковом пути', img: '🏛️' },
    { name: 'Сон-Куль', desc: 'Высокогорное озеро с юрточными лагерями', img: '⛺' },
    { name: 'Арсланбоб', desc: 'Крупнейший ореховый лес в мире', img: '🌰' },
  ];
  
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24));
  return places[dayOfYear % places.length];
}

function displayDailyPlace() {
  const container = document.querySelector('.daily-place-target');
  if (!container) return;
  
  const place = getDailyPlace();
  container.innerHTML = `
    <div class="daily-place animate-on-scroll">
      <span style="font-size:3rem;">${place.img}</span>
      <h3>📍 Место дня: ${place.name}</h3>
      <p>${place.desc}</p>
    </div>
  `;
}

/* === Comments System === */
function initComments(placeId) {
  const container = document.querySelector(`.comments-container[data-place="${placeId}"]`);
  if (!container) return;
  
  const comments = getComments(placeId);
  renderComments(container, comments);
  
  const form = container.querySelector('.comment-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = form.querySelector('[name="author"]');
      const textInput = form.querySelector('[name="text"]');
      const ratingInput = form.querySelector('[name="rating"]');
      
      if (!nameInput.value.trim() || !textInput.value.trim()) {
        showToast('Заполните все поля', 'error');
        return;
      }
      
      const comment = {
        id: Date.now(),
        author: nameInput.value.trim(),
        text: textInput.value.trim(),
        rating: parseInt(ratingInput?.value || 5),
        date: new Date().toISOString()
      };
      
      comments.unshift(comment);
      saveComments(placeId, comments);
      renderComments(container, comments);
      form.reset();
      showToast('Отзыв добавлен!', 'success');
    });
  }
}

function getComments(placeId) {
  try {
    return JSON.parse(localStorage.getItem(`sapar-comments-${placeId}`) || '[]');
  } catch { return []; }
}

function saveComments(placeId, comments) {
  localStorage.setItem(`sapar-comments-${placeId}`, JSON.stringify(comments.slice(0, 50)));
}

function renderComments(container, comments) {
  const listEl = container.querySelector('.comments-list');
  if (!listEl) return;
  
  if (comments.length === 0) {
    listEl.innerHTML = '<p style="color:var(--text-muted);text-align:center;">Пока нет отзывов. Будьте первым!</p>';
    return;
  }
  
  listEl.innerHTML = comments.map(c => `
    <div class="comment">
      <div class="comment-header">
        <span class="comment-author">${escapeHTML(c.author)}</span>
        <span class="comment-date">${new Date(c.date).toLocaleDateString('ru-RU')}</span>
      </div>
      <div class="comment-stars">${'★'.repeat(c.rating)}${'☆'.repeat(5-c.rating)}</div>
      <p>${escapeHTML(c.text)}</p>
    </div>
  `).join('');
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* === Planner / Travel Route Builder === */
function getPlannerItems() {
  try {
    return JSON.parse(localStorage.getItem('sapar-planner') || '[]');
  } catch { return []; }
}

function savePlannerItems(items) {
  localStorage.setItem('sapar-planner', JSON.stringify(items));
}

function addToPlanner(place) {
  const items = getPlannerItems();
  if (items.find(i => i.id === place.id)) {
    showToast('Это место уже в маршруте', 'info');
    return;
  }
  
  items.push({ ...place, addedAt: new Date().toISOString() });
  savePlannerItems(items);
  showToast('Добавлено в маршрут!', 'success');
}

function removeFromPlanner(placeId) {
  let items = getPlannerItems();
  items = items.filter(i => i.id !== placeId);
  savePlannerItems(items);
  showToast('Удалено из маршрута', 'info');
}

function renderPlanner(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  const items = getPlannerItems();
  
  if (items.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);text-align:center;">Маршрут пуст. Добавьте места для планирования путешествия!</p>';
    return;
  }
  
  container.innerHTML = items.map((item, index) => `
    <div class="planner-item">
      <div>
        <strong>${index + 1}. ${escapeHTML(item.name)}</strong>
        <br><small style="color:var(--text-muted);">${item.region || ''}</small>
      </div>
      <button class="planner-remove" onclick="removeFromPlanner('${item.id}');renderPlanner('${containerSelector}');">✕</button>
    </div>
  `).join('');
  
  // Total info
  container.innerHTML += `
    <div style="margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border-color);">
      <p><strong>Всего мест:</strong> ${items.length}</p>
      <p><strong>Примерное время:</strong> ${items.length * 2}-${items.length * 4} дней</p>
    </div>
  `;
}

/* === Weather (Simulated) === */
function displayWeather(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  const conditions = [
    { icon: '☀️', temp: '+28°C', desc: 'Солнечно' },
    { icon: '⛅', temp: '+22°C', desc: 'Переменная облачность' },
    { icon: '🌤️', temp: '+25°C', desc: 'Малооблачно' },
    { icon: '🌦️', temp: '+18°C', desc: 'Местами дождь' },
    { icon: '❄️', temp: '-5°C', desc: 'Снег (горы)' },
  ];
  
  const weather = conditions[Math.floor(Math.random() * conditions.length)];
  
  container.innerHTML = `
    <div class="weather-widget">
      <span class="weather-icon">${weather.icon}</span>
      <div>
        <div class="weather-temp">${weather.temp}</div>
        <div style="color:var(--text-secondary);">${weather.desc}</div>
      </div>
    </div>
  `;
}

/* === Star Rating Input === */
function initStarRating(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  const stars = container.querySelectorAll('.star');
  const input = container.querySelector('input[type="hidden"]');
  
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      const value = index + 1;
      if (input) input.value = value;
      
      stars.forEach((s, i) => {
        s.classList.toggle('active', i < value);
        s.textContent = i < value ? '★' : '☆';
      });
    });
    
    star.addEventListener('mouseenter', () => {
      stars.forEach((s, i) => {
        s.classList.toggle('active', i <= index);
      });
    });
  });
  
  container.addEventListener('mouseleave', () => {
    const currentValue = input ? parseInt(input.value) || 0 : 0;
    stars.forEach((s, i) => {
      s.classList.toggle('active', i < currentValue);
    });
  });
}

/* === Music Player (Simulated Kyrgyz Music) === */
function initMusicPlayer() {
  const btn = document.querySelector('.music-toggle');
  if (!btn) return;
  
  let isPlaying = false;
  
  btn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    btn.textContent = isPlaying ? '🔊' : '🔇';
    btn.style.animation = isPlaying ? 'pulse 1.5s ease infinite' : '';
    
    if (isPlaying) {
      showToast('Играет кыргызская народная музыка 🎵', 'info');
    }
  });
}

/* === Smooth Page Transitions === */
function initPageTransitions() {
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('javascript')) return;
    if (link.getAttribute('target') === '_blank') return;
    
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.3s ease';
      
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
  
  document.body.style.opacity = '1';
}

/* === Initialize Everything on Load === */
window.addEventListener('DOMContentLoaded', () => {
  initModals();
  initTabs();
  initLazyLoading();
  initPageTransitions();
  initMusicPlayer();
  displayAIRecommendation();
  displayDailyPlace();
  
  // Initialize slider if present
  if (document.querySelector('.slider-container')) {
    initSlider('.slider-container');
  }
  
  // Initialize planner if present
  if (document.querySelector('.planner-items')) {
    renderPlanner('.planner-items');
  }
  
  // Initialize weather
  if (document.querySelector('.weather-target')) {
    displayWeather('.weather-target');
  }

  // Initialize star ratings
  document.querySelectorAll('.star-rating').forEach(rating => {
    initStarRating(`#${rating.id}` || rating);
  });
});

// Expose functions globally
window.addToPlanner = addToPlanner;
window.removeFromPlanner = removeFromPlanner;
window.renderPlanner = renderPlanner;
window.displayAIRecommendation = displayAIRecommendation;
window.showToast = showToast;
