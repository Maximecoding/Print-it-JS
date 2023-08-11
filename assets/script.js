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
// ici on retrouve des variables qui restent les mêmes tout le long du code, on récupère les balises de classe et d'id grâce a queryselector
// on déclare aussi la fonction createdots
const left = document.querySelector (".arrow_left");
const right = document.querySelector (".arrow_right");
const img = document.querySelector ("#banner-img");
const nom = document.querySelector ("#tagLine");
const dots = document.querySelector (".dots");
createDots()
//si on clique sur left ou right grâce à l'écouteur évènementielle alors on active moveleft ou moveright
left.addEventListener("click", moveLeft)
right.addEventListener("click", moveRight)

// ici on crée la variable count qui démarre à 0 car les index commencent à 0
let count= 0;
 
// la fonction displayImage comporte une constante qui précise la slide actuelle
//  cette currentslide est égale aux nombres de slides dans le tableau
//le chemin des images est précisé, le symbole dollar dans les chevrons précise son fonctionnement, c'est une variable locale
//currentslide image renvoie a une variable et correspond à une interpolation, c'est une valeur contenue dans du HTML
//img alt est un attribut qui renvoie à la classe tagline de currentslide
// on crée le  nouvel élément nom et on l'insère dans current slide tagline
function displayImage() {
	const currentSlide = slides[count];
    img.src = `./assets/images/slideshow/${currentSlide.image}`;
	img.alt = currentSlide.tagLine;
    nom.innerHTML = currentSlide.tagLine;
}
// cette fonction comporte une variable locale avec une condition, si la condition est vraie sinon code exécuté si la condition est fausse
// si on compare count et 0, nombre de slide -1 a la variable count, on compte le nombre d'élément -1. index commence à 0
// sinon count -1 a la variable count puis on appelle la fonction display image
// donc si count commence à zéro alors nombre total de slide -1 sinon count -1
function moveLeft() {
	if (count == 0 ) {
		count = slides.length - 1;
	} else {
		count = count - 1
	}
	displayImage()
}
// si nombre total de slides -1 alors count commence à 0, sinon count vaut +1
function moveRight() {
	if (count == slides.length - 1) {
		count = 0;
	} else {
		count = count + 1
	}
	displayImage()
	
}
//  la fonction createdots comporte une boucle for pour un nombre défini de fois
// pour i commençant à l'index 0, i inférieure au nombre de slide on incrémente
// alors  la constante div prend la valeur de l'élément créé div
// on ajoute la classe dot
// et on ajoute l'enfant cad le nouvel élément au parent
// enfin en cliquant sur la div le count devient i et active displayimage
function createDots() {
	for (let i = 0; i < slides.length; i++) {
		const div = document.createElement('div')
		if (i===0) {
			div.classList.add('dot_selected')
		}
		div.classList.add('dot')
		dots.appendChild(div)
		div.addEventListener('click',() => {
			count = i
			displayImage()
			let dotSelected = document.querySelectorAll(".dot_selected")
			dotSelected.forEach(div => div.classList.remove('dot_selected'))
			div.classList.add('dot_selected')
		} )
	}
}


