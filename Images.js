//chargement des images du dernier événement et de l'avant-dernier évenement
var dernier = new Array();var avantdernier = new Array();

for (var i = 0; i<5; i++ ) {dernier[i] = new Image();}
dernier[0].src = "Archives 2026-2027/Halloween/Halloween 1.jpg";
dernier[1].src = "Archives 2026-2027/Halloween/Halloween 2.jpg";
dernier[2].src = "Archives 2026-2027/Halloween/Halloween 3.jpg";
dernier[3].src = "Archives 2026-2027/Halloween/Halloween 4.jpg";
dernier[4].src = "Archives 2026-2027/Halloween/Halloween 5.jpg";

for (var i = 0; i<5; i++ ) {avantdernier[i] = new Image();}
avantdernier[0].src = "Archives 2025-2026/Nuit echecs/Nuit des echecs 1.jpg";
avantdernier[1].src = "Archives 2025-2026/Nuit echecs/Nuit des echecs 2.jpg";
avantdernier[2].src = "Archives 2025-2026/Nuit echecs/Nuit des echecs 3.jpg";
avantdernier[3].src = "Archives 2025-2026/Nuit echecs/Nuit des echecs 4.jpg";
avantdernier[4].src = "Archives 2025-2026/Nuit echecs/Affiche nuit des echecs.jpg";


//duree de changement d'images
delaiDernier = 4.;var numeroDernier = 1;
delaiAvantdernier = 4.;var numeroAvantdernier = 1;


// variables de pause
var pauseDernier = false;
var pauseAvantdernier = false;


//changement des photos des événements
function changePhoto(photo){
	document.images[11].src = dernier[photo].src;
}

function incrementationDernier() {
	 if (!pauseDernier) {
		changePhoto(numeroDernier);
		numeroDernier++;
		if (numeroDernier == 5) {
			numeroDernier = 0;
		}
	}
	setTimeout("incrementationDernier()",delaiDernier*1000);
}

function changePhoto2(photo){
	document.images[12].src = avantdernier[photo].src;
}

function incrementationAvantdernier() {
	 if (!pauseAvantdernier) {
		changePhoto2(numeroAvantdernier);
		numeroAvantdernier++;
		if (numeroAvantdernier == 5) {
			numeroAvantdernier = 0;
		}
	}

	setTimeout("incrementationAvantdernier()",delaiAvantdernier*1000);
}

// Pause / reprise au passage de la souris
document.images[11].onmouseover = function() {
    pauseDernier = true;
};

document.images[11].onmouseout = function() {
    pauseDernier = false;
};

document.images[12].onmouseover = function() {
    pauseAvantdernier = true;
};

document.images[12].onmouseout = function() {
    pauseAvantdernier = false;
};


// lancement des diaporamas
setTimeout("incrementationDernier()",delaiDernier*1000);
setTimeout("incrementationAvantdernier()",delaiAvantdernier*1000);
