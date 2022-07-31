const sliderItem = document.getElementsByClassName("slider__item");
const nextItem = document.querySelector(".slider__arrow_next");
const previousItem = document.querySelector(".slider__arrow_prev");

let activeSliderNumber = 0;

function removeActiveClass() {
	sliderItem[activeSliderNumber].className = "slider__item";
}

function setActiveClass() {
	sliderItem[activeSliderNumber].className = "slider__item slider__item_active";
}

nextItem.onclick = function() {
	removeActiveClass();
	activeSliderNumber++;
	if(activeSliderNumber >= sliderItem.length) {
		activeSliderNumber = 0;
	}
	setActiveClass();
}

previousItem.onclick = function() {
	removeActiveClass();
	activeSliderNumber--;
	if(activeSliderNumber <= 0) {
		activeSliderNumber = sliderItem.length-1;
	}
	setActiveClass();
}