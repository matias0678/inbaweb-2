// lucide.createIcons();

// const toggleBtn = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.navbar-links');
// const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
// const dropdowns = document.querySelectorAll('.dropdown');
// const allLinks = document.querySelectorAll('.navbar-links a');
// const overlay = document.querySelector('.overlay');

// toggleBtn.addEventListener('click', () => {
//   const isActive = navLinks.classList.toggle('active');
//   toggleBtn.classList.toggle('active', isActive); // ⬅️ cambia el ícono
//   overlay.style.display = isActive ? 'block' : 'none';
//   document.body.style.overflow = isActive ? 'hidden' : '';
// });


// overlay.addEventListener('click', () => {
//   navLinks.classList.remove('active');
//   dropdowns.forEach(d => d.classList.remove('open'));
//   overlay.style.display = 'none';
// });

// dropdownToggles.forEach(toggle => {
//   toggle.addEventListener('click', e => {
//     if (window.innerWidth <= 768) {
//       e.preventDefault();
//       const parent = toggle.parentElement;
//       const isOpen = parent.classList.contains('open');
//       dropdowns.forEach(d => d.classList.remove('open'));
//       if (!isOpen) {
//         parent.classList.add('open');
//       }
//     }
//   });
// });

// allLinks.forEach(link => {
//   link.addEventListener('click', (e) => {
//     if (window.innerWidth <= 768 && !link.classList.contains('dropdown-toggle')) {
//       navLinks.classList.remove('active');
//       dropdowns.forEach(d => d.classList.remove('open'));
//       overlay.style.display = 'none';
//     }
//   });
// });

// document.addEventListener('click', function (e) {
//   const isClickInsideMenu = e.target.closest('.navbar-container');
//   if (!isClickInsideMenu && window.innerWidth <= 768) {
//     navLinks.classList.remove('active');
//     dropdowns.forEach(d => d.classList.remove('open'));
//     overlay.style.display = 'none';
//   }
// });



lucide.createIcons();

const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar-links');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const dropdowns = document.querySelectorAll('.dropdown');
const allLinks = document.querySelectorAll('.navbar-links a');
const overlay = document.querySelector('.overlay');

// Abrir/cerrar menú móvil
toggleBtn.addEventListener('click', () => {
  const isActive = navLinks.classList.toggle('active');
  toggleBtn.classList.toggle('active', isActive);
  document.body.classList.toggle('menu-open', isActive); // Maneja overlay + scroll
  document.body.style.overflow = isActive ? 'hidden' : ''; // mantiene el scroll bloqueado
});

// Cerrar menú al hacer clic en overlay
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  dropdowns.forEach(d => d.classList.remove('open'));
  toggleBtn.classList.remove('active');
  document.body.classList.remove('menu-open');
  document.body.style.overflow = '';
});

// Abrir dropdowns en móvil
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = toggle.parentElement;
      const isOpen = parent.classList.contains('open');
      dropdowns.forEach(d => d.classList.remove('open'));
      if (!isOpen) {
        parent.classList.add('open');
      }
    }
  });
});

// Cerrar menú al hacer clic en link (excepto los toggles)
allLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !link.classList.contains('dropdown-toggle')) {
      navLinks.classList.remove('active');
      dropdowns.forEach(d => d.classList.remove('open'));
      toggleBtn.classList.remove('active');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
  });
});

// Cerrar menú si se clickea fuera del navbar
document.addEventListener('click', function (e) {
  const isClickInsideMenu = e.target.closest('.navbar-container');
  if (!isClickInsideMenu && window.innerWidth <= 768) {
    navLinks.classList.remove('active');
    dropdowns.forEach(d => d.classList.remove('open'));
    toggleBtn.classList.remove('active');
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
  }
});

