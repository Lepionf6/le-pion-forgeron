//chargement des images du dernier événement et de l'avant-dernier évenement
var image1 = new Array();

for (var i = 0; i<5; i++ ) {image1[i] = new Image();}
image1[0].src = "Nuit echecs/Nuit des echecs 1.jpg";
image1[1].src = "Nuit echecs/Nuit des echecs 2.jpg";
image1[2].src = "Nuit echecs/Nuit des echecs 3.jpg";
image1[3].src = "Nuit echecs/Nuit des echecs 4.jpg";
image1[4].src = "Nuit echecs/Resultats nuit des echecs.jpg";

//duree de changement d'images
delaiImage1 = 4.;var numeroImage1 = 1;

// variables de pause
var pauseImage1 = false;

//changement des photos des événements
function changePhoto1(photo){
	document.images[16].src = image1[photo].src;
}

function incrementationImage1() {
	if (!pauseImage1) {
		changePhoto1(numeroImage1);
		numeroImage1++;
		if (numeroImage1 == 5) {
			numeroImage1 = 0;
		}
	}
	setTimeout("incrementationImage1()",delaiImage1*1000);
}

// Pause / reprise au passage de la souris
document.images[16].onmouseover = function() {
    pauseImage1 = true;
};

document.images[16].onmouseout = function() {
    pauseImage1 = false;
};


// lancement des diaporamas
setTimeout("incrementationImage1()",delaiImage1*1000);


