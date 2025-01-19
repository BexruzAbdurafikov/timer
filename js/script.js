const tabheader__items = document.querySelectorAll('.tabheader__item');
const tabcontents = document.querySelectorAll('.tabcontent');

tabheader__items.forEach((tabheader__item, index) => {
    tabheader__item.onclick = () => {
        tabheader__items.forEach((tab) => tab.classList.remove('tabheader__item_active'));

        tabheader__item.classList.add('tabheader__item_active');

        showSlide(index);
    }
});

function showSlide(index) {
    tabcontents.forEach((tabcontent) => tabcontent.classList.add('hide'));
    tabcontents[index].classList.remove('hide');
}

showSlide(0);
//ДЗ
const slides = document.querySelectorAll('.offer__slide');
const prevButton = document.querySelector('.offer__slider-prev');
const nextButton = document.querySelector('.offer__slider-next');
const currentIndex = document.getElementById('current');
const totalSlides = document.getElementById('total');
let currentSlide = 0;

totalSlides.textContent = slides.length.toString().padStart(2, '0');

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
    currentIndex.textContent = (currentSlide + 1).toString().padStart(2, '0');
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

updateSlider();
