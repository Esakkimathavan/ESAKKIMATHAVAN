const images = document.querySelector('.image');
const prevBtn = document.querySelector('.control_previous');
const nextBtn = document.querySelector('.control_next');

const slideWidth = window.innerWidth;

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    images.scrollLeft += slideWidth;
});

prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    images.scrollLeft -= slideWidth;
});