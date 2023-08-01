const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const left = document.querySelector (".arrow_left");
const right = document.querySelector (".arrow_right");
const img = document.querySelector ("#banner-img");
const nom = document.querySelector ("#tagLine");
const dots = document.querySelector (".dot");

left.addEventListener("click", moveLeft)
right.addEventListener("click", moveRight)


function moveLeft() {
	if (count == 0 ) {
		count = slides.length - 1;
	} else {
		count = count - 1
	}
	displayImage()
}

function moveRight() {
	if (count == slides.length - 1) {
		count = 0;
	} else {
		count = count + 1
	}
	displayImage()
	
}