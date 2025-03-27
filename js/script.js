document.addEventListener('DOMContentLoaded', () => {
  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');

  // Función segura para obtener ruta
  const getLangFromPath = () => window.location.pathname.startsWith('/es/') ? 'es' : 'en';

  const setActiveButton = () => {
    if(getLangFromPath() === 'es'){
      btnEs.classList.add('active-lang');
      btnEn.classList.remove('active-lang');
    } else {
      btnEn.classList.add('active-lang');
      btnEs.classList.remove('active-lang');
    }
  };

  setActiveButton();

  btnEn.addEventListener('click', () => {
    if(getLangFromPath() === 'es') {
      let newPath = window.location.pathname.replace('/es', '') || '/';
      window.location.href = newPath;
    }
  });

  btnEs.addEventListener('click', () => {
    if(getLangFromPath() === 'en') {
      let pathActual = window.location.pathname === '/' ? '/index.html' : window.location.pathname;
      window.location.href = '/es' + pathActual;
    }
  });

  // Evento opcional privacy-link seguro
  const privacyLink = document.getElementById('privacy-link');
  if (privacyLink) {
    privacyLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = 'privacy.html';
    });
  }
});
