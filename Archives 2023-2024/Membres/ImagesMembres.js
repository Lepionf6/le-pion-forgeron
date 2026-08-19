//chargement des images du dernier événement et de l'avant-dernier évenement
var image1 = new Array();var image2 = new Array();

for (var i = 0; i<2; i++ ) {image1[i] = new Image();}
image1[0].src = "Membres/Membres 1.jpg";
image1[1].src = "Membres/Membres 2.jpg";

//duree de changement d'images
delaiImage = 4.;var numeroImage = 1;

//changement des photos des événements
function changePhoto(photo){
	document.images[9].src = image1[photo].src;
}

function incrementationImage() {
	changePhoto(numeroImage);
	numeroImage++;
	if (numeroImage == 2) {
		numeroImage = 0;
	}
	setTimeout("incrementationImage()",delaiImage*1000);
}

setTimeout("incrementationImage()",delaiImage*1000);
