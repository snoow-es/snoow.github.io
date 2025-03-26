// Al cargar la página, establece el idioma actual según la URL
window.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('selector-idioma');
  if(window.location.pathname.startsWith('/es/')) {
    selector.value = 'es';
  } else {
    selector.value = 'en';
  }
});

// Al cambiar el idioma, redirige al usuario
document.getElementById('selector-idioma').addEventListener('change', function() {
  const idioma = this.value;
  const pathActual = window.location.pathname;

  if(idioma === 'es') {
    // Cambiar a español
    if(!pathActual.startsWith('/es/')){
      window.location.href = '/es' + (pathActual === '/' ? '/index.html' : pathActual);
    }
  } else {
    // Cambiar a inglés
    if(pathActual.startsWith('/es/')){
      window.location.href = pathActual.replace('/es', '') || '/';
    }
  }
});
