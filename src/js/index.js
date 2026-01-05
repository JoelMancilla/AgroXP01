document.addEventListener('DOMContentLoaded', function() {
    var btnLoginMobile = document.getElementById('btn-login-mobile');
    var modalLogin = document.getElementById('modal-login');
    if (btnLoginMobile && modalLogin) {
        btnLoginMobile.addEventListener('click', function() {
            modalLogin.classList.add('active');
        });
    }
});


//header cambia de fondo al hacer scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
        document.body.classList.add('scrolled');
    } else {
         document.body.classList.remove('scrolled');
     }
 });



document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-login');
    const openBtn = document.querySelectorAll('.inicio-sesion');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Abrir modal al hacer click en cualquier .
    openBtn.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
        });
    }); 

    // Cerrar modal
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        form.reset();
        emailError.textContent = '';
        passwordError.textContent = '';
    });

    // Cerrar modal al hacer click fuera del contenido
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            form.reset();
            emailError.textContent = '';
            passwordError.textContent = '';
        }
    });

    // Validación del formulario
    form.addEventListener('submit', function(e) {
        let valid = true;
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validar email
        if (!emailInput.value || !/^[\w-.]+@gmail\.com$/.test(emailInput.value)) {
            emailError.textContent = 'Ingrese un Gmail válido (ejemplo@gmail.com)';
            valid = false;
        }
        // Validar contraseña
        if (!passwordInput.value || passwordInput.value.length < 6) {
            passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres';
            valid = false;
        }
        if (!valid) {
            e.preventDefault();
        }
    }); 
});

// animacion de scroll
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll('.fade-in');
  function checkFade() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkFade);
  checkFade();
});


// menu flower clicked
document.addEventListener('DOMContentLoaded', function() {
    const flowerTrigger = document.getElementById('flower-menu-trigger');
    const flowerSection = document.querySelector('.secciton-flower');
    const closeFlower = document.querySelector('.close-flower');
    const flowerContainer = document.querySelector('.flower-container');
    const flowerImages = document.querySelectorAll('.img-flower');

    if (flowerTrigger && flowerSection) {
        flowerTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            // Mostrar la sección floral y ocultar el contenedor de flores
            flowerSection.classList.add('active');
            flowerContainer.style.display = 'none';
            flowerImages.forEach(img => img.style.display = 'none');
        });
    }

    if (closeFlower && flowerSection) {
        closeFlower.addEventListener('click', function() {
            flowerSection.classList.remove('active');
            flowerContainer.style.display = 'grid';
            flowerImages.forEach(img => img.style.display = 'block');
        });
    }

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(e) {
        if (flowerSection.classList.contains('active') && 
            !flowerSection.contains(e.target) && 
            e.target !== flowerTrigger) {
            flowerSection.classList.remove('active');
            flowerContainer.style.display = 'grid';
        }
    });

   
    function checkScreenSize() {
        if (window.innerWidth > 768) {
            flowerContainer.style.display = 'none';
            flowerSection.classList.remove('active');
        } else if (!flowerSection.classList.contains('active')) {
            flowerContainer.style.display = 'grid';
        }
    }

    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});