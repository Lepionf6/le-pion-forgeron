//chargement des images du dernier événement et de l'avant-dernier évenement
var dernier = new Array();var avantdernier = new Array();

for (var i = 0; i<5; i++ ) {dernier[i] = new Image();}
dernier[0].src = "Evenements/Dernier0.jpg";
dernier[1].src = "Evenements/Dernier1.jpg";
dernier[2].src = "Evenements/Dernier2.jpg";
dernier[3].src = "Evenements/Dernier3.jpg";
dernier[4].src = "Evenements/Dernier4.jpg";

for (var i = 0; i<5; i++ ) {avantdernier[i] = new Image();}
avantdernier[0].src = "Evenements/Avant dernier0.jpg";
avantdernier[1].src = "Evenements/Avant dernier1.jpg";
avantdernier[2].src = "Evenements/Avant dernier2.jpg";
avantdernier[3].src = "Evenements/Avant dernier3.jpg";
avantdernier[4].src = "Evenements/Avant dernier4.jpg";

//duree de changement d'images
delaiDernier = 4.;var numeroDernier = 1;
delaiAvantdernier = 4.;var numeroAvantdernier = 1;


// variables de pause
var pauseDernier = false;
var pauseAvantdernier = false;


//changement des photos des événements
function changePhoto(photo){
	document.images[10].src = dernier[photo].src;
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
document.images[10].onmouseover = function() {
    pauseDernier = true;
};

document.images[10].onmouseout = function() {
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
