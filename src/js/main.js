const sliderBox = document.querySelector('.slider__box');
const prevBtn = document.querySelector('.slider__panel-btn--prev');
const nextBtn = document.querySelector('.slider__panel-btn--next');
const sliderImages = document.querySelectorAll('.slider__img');
const sliderSpeed = 100;

let sliderWidth;
let index = 0;

if (window.innerWidth < 768) {
	sliderWidth = sliderImages[1].width + 15;
} else {
	sliderWidth = sliderImages[1].width + 25;
}

const handleSlider = () => {
	index++;
	changeImage();
};

const changeImage = () => {
	if (index > 2) {
		index = -2;
	} else if (index < -2) {
		index = 2;
	}

	sliderBox.style.transform = `translateX(${-index * sliderWidth}px)`;
};

const handleNextBtn = () => {
	index++;
	changeImage();
};

const handlePrevBtn = () => {
	index--;
	changeImage();
};

nextBtn.addEventListener('click', handleNextBtn);
prevBtn.addEventListener('click', handlePrevBtn);
