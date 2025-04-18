
(function () {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let cards = Array.from(track.children);
    let isAnimating = false; // Evitar múltiples clics durante la animación

    // Calcula el número de tarjetas visibles según el ancho
    function visibleCards() {
        const trackWidth = track.offsetWidth;

        if (trackWidth < 500) return 1; // 1 tarjeta visible en pantallas pequeñas
        if (trackWidth < 768) return 2; // 2 tarjetas visibles en pantallas medianas
        if (trackWidth < 1024) return 3; // 3 tarjetas visibles en pantallas grandes
        return 4; // 4 tarjetas visibles por defecto
    }

    function updateCarousel(transition = true) {
        const cardWidth = cards[0].offsetWidth;
        const offset = -visibleCards() * cardWidth; // Centrar las tarjetas visibles
        track.style.transition = transition ? 'transform 0.5s ease-in-out' : 'none';
        track.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        if (isAnimating) return; // Evitar múltiples clics durante la animación
        isAnimating = true;

        const cardWidth = cards[0].offsetWidth;

        // Mover carrusel hacia la izquierda
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateX(${-cardWidth}px)`;

        // Reorganizar tarjetas después de la animación
        setTimeout(() => {
            // Mover la primera tarjeta al final
            track.appendChild(cards[0]);

            // Actualizar la lista de tarjetas
            cards = Array.from(track.children);

            // Resetear posición del carrusel sin transición
            track.style.transition = 'none';
            track.style.transform = `translateX(0)`;

            isAnimating = false;
        }, 500);
    }

    function prevSlide() {
        if (isAnimating) return; // Evitar múltiples clics durante la animación
        isAnimating = true;

        const cardWidth = cards[0].offsetWidth;

        // Mover carrusel hacia la derecha
        track.style.transition = 'none';

        // Mover la última tarjeta al principio
        track.insertBefore(cards[cards.length - 1], cards[0]);

        // Actualizar la lista de tarjetas
        cards = Array.from(track.children);

        // Ajustar la posición inicial para la animación hacia la derecha
        track.style.transform = `translateX(${-cardWidth}px)`;

        // Animar hacia la posición central
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = `translateX(0)`;
            isAnimating = false;
        }, 0);
    }

    function startAutoSlide() {
        setInterval(nextSlide, 6000); // Avanza cada 6 segundos
    }

    // Eventos
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    window.addEventListener('resize', () => {
        updateCarousel(false);
    });

    // Inicialización
    updateCarousel(false);
    startAutoSlide();
})();
