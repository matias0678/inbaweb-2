const cards = document.querySelectorAll('.cards-grid .card');
let currentFiltro = null;

document.querySelectorAll('.index-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const filtro = this.getAttribute('href').substring(1);
    const target = document.querySelector('#equipo-medico');
    const yOffset = -80;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    if (currentFiltro === filtro) {
      cards.forEach(card => card.classList.remove('hidden'));
      currentFiltro = null;
    } else {
      cards.forEach(card => {
        const pertenece = card.classList.contains(`especialidad-${filtro}`);
        card.classList.toggle('hidden', !pertenece);
      });
      currentFiltro = filtro;
    }

    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

document.getElementById('ver-todos').addEventListener('click', function(e) {
  e.preventDefault();
  cards.forEach(card => card.classList.remove('hidden'));
  currentFiltro = null;

  const target = document.querySelector('#equipo-medico');
  const yOffset = -80;
  const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
});