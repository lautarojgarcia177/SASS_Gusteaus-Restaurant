// Smooth scroll
function scrollToAboutUs() {
    document.querySelector('#about-us').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToPopularDishes() {
    document.querySelector('.gallery').scrollIntoView({
        behavior: 'smooth'
    });
}

// Cambiar a imagen de fondo
const backgroundImagesUrls = [
    'images/nav-img-1.jpeg',
    'images/nav-img-2.jpeg',
    'images/nav-img-3.jpeg',
];
let backgroundImagesUrlsIndex = 1;
setInterval(function() {
    const backgroundImg = new Image();
    backgroundImg.id = 'background-img';
    backgroundImg.src = backgroundImagesUrls[backgroundImagesUrlsIndex];
    backgroundImagesUrlsIndex === 2 ? backgroundImagesUrlsIndex = 0 : backgroundImagesUrlsIndex++;
    document.querySelector('.content__background').innerHTML = '';
    document.querySelector('.content__background').appendChild(backgroundImg);
}, 5000);