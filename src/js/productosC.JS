document.addEventListener('DOMContentLoaded', () => {

  // MODAL DE PRODUCTO
 
  const modal = document.querySelector('.card-1-modal');
  const modalImg = document.querySelector('.card-1-modal__img');
  const modalTitle = document.querySelector('.card-1-modal__title');
  const modalSpecs = document.querySelector('.card-1-modal__specs');
  const modalSpecs0 = document.querySelector('.card-1-modal__specs0');
  const closeButtons = document.querySelectorAll('[data-close-modal]');
  const cardProductos = document.querySelectorAll('.card-producto');

  if (cardProductos.length && modal) {
    function abrirModal(productoData) {
      modalImg.src = productoData.img || '';
      modalImg.alt = productoData.title || 'Imagen del producto';
      modalTitle.textContent = productoData.title || 'Detalle del producto';

      modalSpecs.innerHTML = productoData.specs.map(spec =>
        `<li><span class="line">_</span>${spec}<span class="line">_</span></li>`
      ).join('');

      modalSpecs0.innerHTML = `
        <h7 style="color: #04340B;">Especificaciones técnicas</h7>
        ${productoData.specs.map(spec =>
          `<li><span class="line">_</span>${spec}<span class="line">_</span></li>`
        ).join('')}
      `;

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.documentElement.style.overflow = 'hidden';
    }

    cardProductos.forEach(card => {
      card.addEventListener('click', () => {
        const productoData = JSON.parse(card.getAttribute('data-producto'));
        abrirModal(productoData);
      });
    });

    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.documentElement.style.overflow = '';
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.documentElement.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.documentElement.style.overflow = '';
      }
    });
  }


  function updateRowCols() {
    const isMobile = window.innerWidth >= 280 && window.innerWidth <= 768;
    const rows = document.querySelectorAll('.row.row-cols-3, .row.row-cols-2');

    rows.forEach(row => {
      if (isMobile) {
        row.classList.remove('row-cols-3');
        row.classList.add('row-cols-2');
      } else {
        row.classList.remove('row-cols-2');
        row.classList.add('row-cols-3');
      }
    });
  }
  updateRowCols();
  window.addEventListener('resize', updateRowCols);


  const details = document.querySelector(".version-movil details");
  const flecha = document.querySelector(".flecha-icono");

  if (details && flecha) {
    details.addEventListener("toggle", () => {
      flecha.style.transform = details.open ? "rotate(0deg)" : "rotate(-90deg)";
    });
  }


  // LISTA DE PRODUCTOS + PAGINACIÓN
  const listaMovil = document.querySelector(".version-movil .productos-items");
  const listaDesktop = document.querySelector(".version-desktop .productos-items");
  const secciones = document.querySelectorAll(".productos-container .col-md-8");
  const botonesPagina = document.querySelectorAll(".pagina");
  const flechas = document.querySelectorAll(".flecha");

  let paginaActual = 0;

  function mostrarSeccion(index) {
    secciones.forEach((sec, i) => {
      sec.style.display = (i === index) ? "block" : "none";
    });

    botonesPagina.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });

    if (listaMovil) {
      const itemsMovil = listaMovil.querySelectorAll("li");
      itemsMovil.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
    }
    
    if (listaDesktop) {
      const itemsDesktop = listaDesktop.querySelectorAll("li");
      itemsDesktop.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
    }

    paginaActual = index;
  }


  if (listaMovil) {
    const itemsMovil = listaMovil.querySelectorAll("li");
    itemsMovil.forEach((item, index) => {
      item.addEventListener("click", () => mostrarSeccion(index));
    });
  }

  if (listaDesktop) {
    const itemsDesktop = listaDesktop.querySelectorAll("li");
    itemsDesktop.forEach((item, index) => {
      item.addEventListener("click", () => mostrarSeccion(index));
    });
  }


  botonesPagina.forEach((btn, i) => {
    btn.addEventListener("click", () => mostrarSeccion(i));
  });

  if (flechas.length >= 2) {
    flechas[0].addEventListener("click", () => {
      let nuevaPagina = (paginaActual - 1 + secciones.length) % secciones.length;
      mostrarSeccion(nuevaPagina);
    });

    flechas[1].addEventListener("click", () => {
      let nuevaPagina = (paginaActual + 1) % secciones.length;
      mostrarSeccion(nuevaPagina);
    });
  }

 
  if (secciones.length) {
    mostrarSeccion(0);
  }
});