const buscador = document.getElementById('buscador-estudios');
const tarjetas = document.querySelectorAll('.tarjeta-estudio');

// Mensaje opcional si no hay coincidencias
let mensajeNoEncontrado = document.getElementById('mensaje-no-encontrado');
if (!mensajeNoEncontrado) {
  mensajeNoEncontrado = document.createElement('p');
  mensajeNoEncontrado.id = 'mensaje-no-encontrado';
  mensajeNoEncontrado.style.color = '#999';
  mensajeNoEncontrado.style.marginTop = '1rem';
  mensajeNoEncontrado.style.display = 'none';
  mensajeNoEncontrado.innerText = 'No se encontraron estudios relacionados.';
  buscador.insertAdjacentElement('afterend', mensajeNoEncontrado);
}

buscador.addEventListener('input', function () {
  const valor = this.value.toLowerCase();
  let encontrados = 0;

  tarjetas.forEach(card => {
    const keywords = card.getAttribute('data-keywords')?.toLowerCase() || "";
    const textoVisible = card.innerText.toLowerCase();
    const textoOculto = card.querySelector('details')?.innerHTML.toLowerCase() || "";
    const contenidoTotal = keywords + textoVisible + textoOculto;

    const coincide = contenidoTotal.includes(valor);

    card.style.display = coincide ? 'block' : 'none';
    if (coincide) encontrados++;
  });

  mensajeNoEncontrado.style.display = encontrados === 0 ? 'block' : 'none';
});