// JS para la página de ofertas
document.addEventListener('DOMContentLoaded', function() {
  // Configuración para cada carrusel
  const carruseles = [
    {
      id: '1',
      imgs: document.querySelectorAll('#ofertasCarrusel1 .oferta-img'),
      current: 0,
      intervalId: null
    },
    {
      id: '2',
      imgs: document.querySelectorAll('#ofertasCarrusel2 .oferta-img1'),
      current: 0,
      intervalId: null
    }
    
  ];

  function showImg(carrusel) {
    // Ocultar todas las imágenes del carrusel
    carrusel.imgs.forEach(img => img.classList.remove('active'));
    
    // Mostrar la imagen actual
    carrusel.imgs[carrusel.current].classList.add('active');
  }

  function nextImg(carrusel) {
    carrusel.current = (carrusel.current + 1) % carrusel.imgs.length;
    showImg(carrusel);
  }

  function prevImg(carrusel) {
    carrusel.current = (carrusel.current - 1 + carrusel.imgs.length) % carrusel.imgs.length;
    showImg(carrusel);
  }

  function startAutoSlide(carrusel) {
    stopAutoSlide(carrusel);
    carrusel.intervalId = setInterval(() => nextImg(carrusel), 5000);
  }

  function stopAutoSlide(carrusel) {
    if (carrusel.intervalId) {
      clearInterval(carrusel.intervalId);
    }
  }

  // Inicializar cada carrusel
  carruseles.forEach(carrusel => {
    // Mostrar primera imagen
    showImg(carrusel);
    startAutoSlide(carrusel);
    
    // Configurar eventos para los botones
    document.querySelectorAll(`[data-carrusel="${carrusel.id}"].prev`).forEach(btn => {
      btn.addEventListener('click', () => {
        prevImg(carrusel);
        stopAutoSlide(carrusel);
        startAutoSlide(carrusel);
      });
    });
    
    document.querySelectorAll(`[data-carrusel="${carrusel.id}"].next`).forEach(btn => {
      btn.addEventListener('click', () => {
        nextImg(carrusel);
        stopAutoSlide(carrusel);
        startAutoSlide(carrusel);
      });
    });
    
    // Pausar al hacer hover
    document.getElementById(`ofertasCarrusel${carrusel.id}`).addEventListener('mouseenter', () => stopAutoSlide(carrusel));
    document.getElementById(`ofertasCarrusel${carrusel.id}`).addEventListener('mouseleave', () => startAutoSlide(carrusel));
  });
});