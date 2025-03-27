document.addEventListener('DOMContentLoaded', () => {
  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');
  const pathActual = window.location.pathname;

  // Actualiza el botón activo según la URL
  if (pathActual.startsWith('/es/')) {
    btnEs.classList.add('active-lang');
  } else {
    btnEn.classList.add('active-lang');
  }

  btnEn.addEventListener('click', () => {
    if(pathActual.startsWith('/es/')){
      window.location.href = pathActual.replace('/es', '') || '/';
    }
  });

  btnEs.addEventListener('click', () => {
    if(!pathActual.startsWith('/es/')){
      window.location.href = '/es' + (pathActual === '/' ? '/index.html' : pathActual);
    }
  });

  // Evento opcional para privacy-link
  const privacyLink = document.getElementById('privacy-link');
  if (privacyLink) {
    privacyLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = 'privacy.html';
    });
  }
});
