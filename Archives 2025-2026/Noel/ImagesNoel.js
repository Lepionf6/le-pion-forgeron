//chargement des images du dernier événement et de l'avant-dernier évenement
var image1 = new Array();var image2 = new Array();

for (var i = 0; i<3; i++ ) {image1[i] = new Image();}
image1[0].src = "Noel/Affiche noel.jpg";
image1[1].src = "Noel/Noel 4.jpg";
image1[2].src = "Noel/Noel 3.jpg";

for (var i = 0; i<3; i++ ) {image2[i] = new Image();}
image2[0].src = "Noel/Noel 1.jpg";
image2[1].src = "Noel/Noel 2.jpg";
image2[2].src = "Noel/Resultats noel.jpg";

//duree de changement d'images
delaiImage = 4.;var numeroImage = 1;

//changement des photos des événements
function changePhoto(photo){
	document.images[15].src = image1[photo].src;
        document.images[16].src = image2[photo].src;
}

function incrementationImage() {
	changePhoto(numeroImage);
	numeroImage++;
	if (numeroImage == 3) {
		numeroImage = 0;
	}
	setTimeout("incrementationImage()",delaiImage*1000);
}
setTimeout("incrementationImage()",delaiImage*1000);

