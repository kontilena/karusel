let goodsList = document.querySelector('.goods__list');
let nextButton = document.querySelector('.slider__button--next');
let prevButton = document.querySelector('.slider__button--prev'); 
let move = 0;
nextButton.addEventListener('click', function(){
    if (move <= -3540) {
        move = 0 ;
    } else {
        move -= 1180;
    }
    goodsList.style = "transform: translateX(" + move +"px)";
});
prevButton.addEventListener('click', function(){
    if (move >= 0) {
        move = -3540 ;
    } else {
        move += 1180;
    }
    goodsList.style = "transform: translateX(" + move +"px)";
});
