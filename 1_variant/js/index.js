let slideIndex = 1;
showslides(slideIndex);

function pluslides(n) {
    showslides(slideIndex += n);
}

function currentSlide(n) {
    showslides(slideIndex = n);
}

function showslides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dot = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        slides[i].style.display = "none";
        dot[i].className = dot[i].className.replace('active', "")
    }
    slides[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].className += "active";
}