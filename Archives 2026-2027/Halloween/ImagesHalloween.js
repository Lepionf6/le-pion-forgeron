//chargement des images du dernier événement et de l'avant-dernier évenement
var image1 = new Array(); var image2  = new Array();

for (var i = 0; i<2; i++ ) {image1[i] = new Image();}
image1[0].src = "Halloween/Halloween 8.jpg";
image1[1].src = "Halloween/Resultats Halloween.jpg";

for (var i = 0; i<8; i++ ) {image2[i] = new Image();}
image2[0].src = "Halloween/Affiche.png";
image2[1].src = "Halloween/Halloween 1.jpg";
image2[2].src = "Halloween/Halloween 2.jpg";
image2[3].src = "Halloween/Halloween 3.jpg";
image2[4].src = "Halloween/Halloween 4.jpg";
image2[5].src = "Halloween/Halloween 5.jpg";
image2[6].src = "Halloween/Halloween 6.jpg";
image2[7].src = "Halloween/Halloween 7.jpg";


//duree de changement d'images
delaiImage1 = 4.; var numeroImage1 = 1;
delaiImage2 = 3.; var numeroImage2 = 1;

// variables de pause
var pauseImage1 = false;
var pauseImage2 = false;


//changement des photos des événements
function changePhoto1(photo){
	document.images[15].src = image1[photo].src;
}

function incrementationImage1() {
	if (!pauseImage1) {
		changePhoto1(numeroImage1);
		numeroImage1++;
		if (numeroImage1 == 2) {
			numeroImage1 = 0;
		}
	}
	setTimeout("incrementationImage1()",delaiImage1*1000);
}

function changePhoto2(photo){
	document.images[17].src = image2[photo].src;
}

function incrementationImage2() {
	if (!pauseImage2) {
		changePhoto2(numeroImage2);
		numeroImage2++;
		if (numeroImage2 == 8) {
			numeroImage2 = 0;
		}
	}
	setTimeout("incrementationImage2()",delaiImage2*1000);
}


// Pause / reprise au passage de la souris
document.images[15].onmouseover = function() {
    pauseImage1 = true;
};

document.images[15].onmouseout = function() {
        pauseImage1 = false;
};

document.images[17].onmouseover = function() {
    pauseImage2 = true;
};

document.images[17].onmouseout = function() {
        pauseImage2 = false;
};



// lancement des diaporamas
setTimeout("incrementationImage1()",delaiImage1*1000);
setTimeout("incrementationImage2()",delaiImage2*1000);


