//chargement des images des membres
var image1 = new Array();

for (var i = 0; i<2; i++ ) {image1[i] = new Image();}
image1[0].src = "Membres/Membres 1.jpg";
image1[1].src = "Membres/Membres 2.jpg";

//duree de changement d'images
delaiImage = 4.;var numeroImage = 1;

// variable de pause
var pauseImage = false;

//changement des photos des événements
function changePhoto(photo){
	document.images[9].src = image1[photo].src;
}

function incrementationImage() {
	if (!pauseImage) {
		changePhoto(numeroImage);
		numeroImage++;
		if (numeroImage == 2) {
			numeroImage = 0;
		}
	}
	setTimeout("incrementationImage()",delaiImage*1000);
}

// Pause / reprise au passage de la souris
document.images[9].onmouseover = function() {
    pauseImage = true;
};

document.images[9].onmouseout = function() {
    pauseImage = false;
};


setTimeout("incrementationImage()",delaiImage*1000);

