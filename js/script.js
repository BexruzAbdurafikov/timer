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

//Timer
const endTime = `2025-05-20`
const days_item = document.querySelector(`#days`)
const hours_item = document.querySelector(`#hours`)
const minutes_item = document.querySelector(`#minutes`)
const seconds_item = document.querySelector(`#seconds`)

const remainTime = (remain) => {
    const currentTime = new Date()
    const total = Date.parse(remain) - Date.parse(currentTime)
    if (total <= 0) {
        return {days: 0, hours: 0, minutes: 0, seconds: 0}
    }
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return {days , hours, minutes, seconds}
}

const format = (time) => {
    return time < 10 ? `0${time}` : time
}

const update = () => {
    const time = remainTime(endTime)

    days_item.textContent = format(time.days)
    hours_item.textContent = format(time.hours)
    minutes_item.textContent = format(time.minutes)
    seconds_item.textContent = format(time.seconds)

    if(time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        clearInterval(interval)
    }
}

const interval = setInterval(update, 1000)

update()
