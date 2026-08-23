//chargement des images du dernier événement et de l'avant-dernier évenement
var image1 = new Array();var image2 = new Array();

for (var i = 0; i<3; i++ ) {image1[i] = new Image();}
image1[0].src = "Membres/Membres 1.jpg";
image1[1].src = "Membres/Membres 3.jpg";
image1[2].src = "Membres/Membres 4.jpg";

for (var i2 = 0; i2<2; i2++ ) {image2[i2] = new Image();}
image2[0].src = "Membres/Membres 2.jpg";
image2[1].src = "Membres/Membres 5.jpg";

//duree de changement d'images
delaiImage1 = 3.;var numeroImage1 = 1;
delaiImage2 = 4.5;var numeroImage2 = 1;

// variables de pause
var pauseImage1 = false;
var pauseImage2 = false;

//changement des photos des événements
function changePhoto1(photo){
	document.images[12].src = image1[photo].src;
}

function incrementationImage1() {
	if (!pauseImage1) {
		changePhoto1(numeroImage1);
		numeroImage1++;
		if (numeroImage1 == 3) {
			numeroImage1 = 0;
		}
	}
	setTimeout("incrementationImage1()",delaiImage1*1000);
}

function changePhoto2(photo){
        document.images[13].src = image2[photo].src;
}

function incrementationImage2() {
	if (!pauseImage2) {
		changePhoto2(numeroImage2);
		numeroImage2++;
		if (numeroImage2 == 2) {
			numeroImage2 = 0;
		}	
	}
	setTimeout("incrementationImage2()",delaiImage2*1000);
}

// Pause / reprise au passage de la souris
document.images[12].onmouseover = function() {
    pauseImage1 = true;
};

document.images[12].onmouseout = function() {
    pauseImage1 = false;
};

document.images[13].onmouseover = function() {
    pauseImage2 = true;
};

document.images[13].onmouseout = function() {
    pauseImage2 = false;
};

// lancement des diaporamas
setTimeout("incrementationImage1()",delaiImage1*1000);
setTimeout("incrementationImage2()",delaiImage2*1000);
