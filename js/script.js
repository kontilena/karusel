let slider = document.querySelector('.slider__list');
let rBtn = document.querySelector('.slider__button--next');
let lBtn = document.querySelector('.slider__button--prev'); 

rBtn.addEventListener('click', function() {
    for(var i=0;i<5;i++){
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
    }

});
lBtn.addEventListener('click', function() {
    for(var i=0;i<5;i++){
        slider.insertBefore(slider.firstElementChild, slider.lastElementChild);
    }
    
});
