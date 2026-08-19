//chargement des images du dernier événement et de l'avant-dernier évenement
var image1 = new Array();

for (var i = 0; i<5; i++ ) {image1[i] = new Image();}
image1[0].src = "Nuit echecs/Nuit des echecs 1.jpg";
image1[1].src = "Nuit echecs/Nuit des echecs 2.jpg";
image1[2].src = "Nuit echecs/Nuit des echecs 3.jpg";
image1[3].src = "Nuit echecs/Nuit des echecs 4.jpg";
image1[4].src = "Nuit echecs/Resultats nuit des echecs.jpg";

//duree de changement d'images
delaiImage = 4.;var numeroImage = 1;

//changement des photos des événements
function changePhoto(photo){
	document.images[16].src = image1[photo].src;
}

function incrementationImage() {
	changePhoto(numeroImage);
	numeroImage++;
	if (numeroImage == 5) {
		numeroImage = 0;
	}
	setTimeout("incrementationImage()",delaiImage*1000);
}
setTimeout("incrementationImage()",delaiImage*1000);

