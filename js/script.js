
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function showSlide(slideIndex) {
        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });
        slides[slideIndex].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Iniciar o slideshow
    showSlide(currentSlide);

    // Alterar os slides a cada 3 segundos
    setInterval(nextSlide, 3000);


    // Adiciona um evento de clique à imagem
    document.getElementById('cafe').addEventListener('click', function() {
        // Redireciona para outra página ao clicar na imagem
        window.location.href = 'formulario.html';
    });






