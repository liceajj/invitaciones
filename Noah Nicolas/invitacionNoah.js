//hacer que la cancion empiece automaticamente al hacer scrool y desdes el seg 38 

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('miCancion');

    // Utilizamos IntersectionObserver para detectar cuando el audio entra en la vista
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fijamos el tiempo de inicio en 38 segundos y reproducimos
                audio.currentTime = 38;
                audio.play();
            }
        });
    });

    // Observamos el elemento de audio
    observer.observe(audio);
});

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