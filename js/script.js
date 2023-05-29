//BURGER
const headerBurger = document.querySelector('.menu__burger');
if (headerBurger){
    const headerMenu = document.querySelector('.menu__body');
    headerBurger.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    }) 
}
//SLIDER
new Swiper('.slider',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
    slidesPerView: 1.5,
    initialSlide: 1,
    centeredSlides: true,
    loop: true,
    breakpoints:{
        480: {
            slidesPerView: 2,
        }
    },
});
