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
//P5 Premiers pas sur le langage JavaScript
// j'ai consulté les cours openclassroom, la documentation MDN et les cours de graphikart
// Je débute comme développeur front-end en freelance, et je viens de décrocher une offre pour dynamiser le site Internet statique
// d’une petite imprimerie familiale nommée Print it.
// J'ai pris connaissance de la vidéo qui explique en détail le carrousel idéal souhaité.
// <script src="./assets/script.js"></script> dans le html
// on peut voir qu'il y a constante des slides sur le fichier js  images et taglines


// Étape 1 : Mettez à jour le code HTML
// Pour le carrousel dynamique, j'ai ajouté les flèches en mode statique, permettant de gérer la navigation entre les images du carrousel.
// j'ai analysé  le code HTML et CSS à la recherche des éléments déjà présents sur le site. 
// Dans les images du site il y a deux fichiers, `arrow_left.png` et `arrow_right.png`. Le CSS aide à voir où intégrer les images. 
// Dans le code html:
// <img class="arrow_left arrow" src="./assets/images/arrow_left.png" alt="imagefleche gauche">
// <img class="arrow_right arrow" src="./assets/images/arrow_right.png" alt="imagefleche droite">
// chemin d'accès, image , les classes et alt descriptif

// ici on retrouve des variables qui restent les mêmes tout le long du code, on récupère les balises de classe et d'id grâce a queryselector
// hashtag pour id et point pour classe; camel case
// on déclare aussi la fonction createdots
// const variable dont la valeur reste là même, let variable peut changer
const left = document.querySelector (".arrow_left");
const right = document.querySelector (".arrow_right");
const img = document.querySelector ("#banner-img");
const nom = document.querySelector ("#tagLine");
const dots = document.querySelector (".dots");
createDots()

// Étape 2 : Ajoutez des Event Listeners sur les flèches 
// Pour rendre les flèches interactives afin de pouvoir gérer le changement des images de notre carrousel. 
// Et on peut différencier le clic sur le bouton gauche du clic sur le bouton droit. 
//si on clique sur left ou right grâce à l'écouteur évènementielle alors on active moveleft ou moveright
// le code s'exécute si l'évènement est réalisé
left.addEventListener("click", moveLeft)
right.addEventListener("click", moveRight)

// ici on crée la variable count qui démarre à 0 car les index commencent à 0, on déclare cette variable
let count= 0;
let selectedImage
 
// la fonction displayImage comporte une constante qui précise la slide actuelle
//  cette currentslide est égale aux nombres de slides dans le tableau
//le chemin des images est précisé, le symbole dollar dans les chevrons précise son fonctionnement, c'est une variable locale
//currentslide image renvoie a une variable et correspond à une interpolation, c'est une valeur contenue dans du HTML
//img alt est un attribut qui renvoie à la classe tagline de currentslide
// on crée le  nouvel élément nom et on l'insère dans current slide tagline
function displayImage(div) {
	const currentSlide = slides[count];
    img.src = `./assets/images/slideshow/${currentSlide.image}`;
	img.alt = currentSlide.tagLine;
    nom.innerHTML = currentSlide.tagLine;
	let dotSelected = document.querySelectorAll(".dot_selected")
	dotSelected.forEach(div => div.classList.remove('dot_selected'))
	div.classList.add('dot_selected')
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
	const div = document.querySelector(`#dot-${count}`)
	displayImage(div)
}
// si nombre total de slides -1 alors count commence à 0, sinon count vaut +1
function moveRight() {
	if (count == slides.length - 1) {
		count = 0;
	} else {
		count = count + 1
	}
	const div = document.querySelector(`#dot-${count}`)
	displayImage(div)
	
}

// Étape 3 : Ajoutez des bullet points au slider ligne 109 à 125
// Ils permettront à l’utilisateur de savoir sur quelle slide il se trouve.
//  un point par image contenue dans le slider. 
// il faut différencier le point qui signale la diapositive en cours de visionnage : ce sera la première.
// Dans le CSS, le point en cours a une classe spécifique.
// et donc via JavaScript, le nombre d’éléments présents dans le tableau “slides” du fichier `script.js` , et afficher un point par image.

// dans le html <div class="dots"></div> et dans le css les classes dot, dots et dot selected

//  la fonction createdots comporte une boucle for pour un nombre défini de fois
// pour i commençant à l'index 0, i inférieure au nombre de slide alors on incrémente
//  la constante div prend la valeur de l'élément créé div
// on ajoute la classe dot
// et on ajoute l'enfant cad le nouvel élément au parent
// enfin en cliquant sur la div le count devient i et active displayimage
// on sélectionne dot selected, on retire cette classe à chaque div dans la boucle et ajoute cette classe à l'élément actif

function createDots() {
	for (let i = 0; i < slides.length; i++) {
		const div = document.createElement('div')
		div.id = "dot-"+i
		if (i===0) {
			div.classList.add('dot_selected')
		}
		div.classList.add('dot')
		dots.appendChild(div)
		div.addEventListener('click',() => {
			count = i
			displayImage(div)
			
		} )
	}
}
// vérifier durée

// Étape 4 : Modifiez le slide au clic sur le bouton cf up ligne 118 et 65
// Au clic sur la flèche droite : 
// on change le bullet point actif au suivant ;
// on change l’image ;
// on change le texte correspondant à l’image.
// Au clic sur la flèche gauche, nous faisons la même chose mais pour les éléments précédents
// Pour changer l’image, il faut construire le chemin de la nouvelle image.
// Pour intégrer le texte, on utilise la propriété innerHTML et insérez la tagLine de la slide
// On Travaille avec les index du tableau. 

// Étape 5 : Mettez en place le défilement infini sur le carrousel:  les fonctions
// Pour faire en sorte que notre carrousel tourne en boucle indéfiniment. On ajoute des conditions. 
// Si on est à la dernière image et que l’on clique à droite : 
// on affiche la première image ;
// le point sélectionné est le premier.
// Si on est à la première image et qu’on clique à gauche : 
// on affiche la dernière image ;
// le point sélectionné est le dernier. 
// Dans tous les cas, le texte change en accord avec l’image montrée.


// commits réguliers et procédure git pour initialiser le dépot puis déployer le lien
// console avant déploiement pour débuguer
//pb flêche et bullet point actif

// Débriefing (15 minutes) 
// les étapes qui vous ont paru compliquées : démarrer, fonction createdots
// les étapes que vous avez appréciées et qui vous ont paru plus faciles: moveleft moveright function event , function displayimages
// les questions qui vous restent en tête: comprendre la structure d'un fichier js, trouver davantage de ressources liées au js
// autres difficultés: différencier backticks, guillemet, apostrophes

