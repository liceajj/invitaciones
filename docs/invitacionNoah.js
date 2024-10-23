/*document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('miCancion');

    // Detectar cuando el usuario hace scroll
    document.addEventListener('scroll', function () {
        if (!audio.playing) {
            audio.currentTime = 38;  // Comienza en el segundo 38
            audio.play().catch(error => {
                console.log("Error al reproducir automáticamente en móvil: ", error);
            });
        }
    }, { once: true });  // Se activa solo la primera vez que hace scroll
});
*/
// hacer que el carrusel de fotos tenga funcionalidad

let currentSlide = 0;

function moveSlides(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;

    currentSlide += n;

    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Vuelve al primer slide
    }
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Va al último slide
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}


document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos todos los elementos que queremos animar
    const elementos = document.querySelectorAll('.img-arbol, .container-frase, .container-fecha-nombre, .container-familia, .vestimenta, .carousel, .ubicacion');

    // Configuramos el IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // Añadimos la clase 'visible' al entrar en la vista
                observer.unobserve(entry.target);  // Dejamos de observar el elemento una vez animado
            }
        });
    }, { threshold: 0.1 });  // Ajustamos el umbral para que la animación empiece cuando el 10% del elemento es visible

    // Observamos cada uno de los elementos seleccionados
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
});


/*
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los elementos que tengan la clase 'estilo-dos'
    const elementos = document.querySelectorAll('.estilo-dos', '.carousel');  // Se corrige agregando el punto (.)

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // Solo el nombre de la clase sin el punto
                observer.unobserve(entry.target);  // Deja de observar una vez que se ha mostrado
            }
        });
    }, { threshold: 0.1 });  // Comienza cuando el 10% del elemento es visible

    // Observa cada elemento con la clase 'estilo-dos'
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
});
*/