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
delaiImage = 2.7;var numeroImage = 1;
delaiImage2 = 4.;var numeroImage2 = 1;

//changement des photos des événements
function changePhoto(photo){
	document.images[12].src = image1[photo].src;
}

function incrementationImage() {
	changePhoto(numeroImage);
	numeroImage++;
	if (numeroImage == 3) {
		numeroImage = 0;
	}
	setTimeout("incrementationImage()",delaiImage*1000);
}

function changePhoto2(photo2){
        document.images[13].src = image2[photo2].src;
}

function incrementationImage2() {
	changePhoto2(numeroImage2);
	numeroImage2++;
	if (numeroImage2 == 2) {
		numeroImage2 = 0;
	}
	setTimeout("incrementationImage2()",delaiImage2*1000);
}

setTimeout("incrementationImage()",delaiImage*1000);
setTimeout("incrementationImage2()",delaiImage2*1000);