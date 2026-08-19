//chargement des images du dernier événement et de l'avant-dernier évenement
var image1 = new Array();var image2 = new Array();

for (var i = 0; i<2; i++ ) {image1[i] = new Image();}
image1[0].src = "Saint valentin/Affiche saint valentin.jpg";
image1[1].src = "Saint valentin/Saint valentin 5.jpg";

for (var i2 = 0; i2<4; i2++ ) {image2[i2] = new Image();}
image2[0].src = "Saint valentin/Saint valentin 4.jpg";
image2[1].src = "Saint valentin/Saint valentin 3.jpg";
image2[2].src = "Saint valentin/Saint valentin 2.jpg";
image2[3].src = "Saint valentin/Resultats saint valentin.jpg";


//duree de changement d'images
delaiImage = 6.;var numeroImage = 1;
delaiImage2 = 3.;var numeroImage2 = 1;

//changement des photos des événements
function changePhoto(photo){
	document.images[15].src = image1[photo].src;
}

function incrementationImage() {
	changePhoto(numeroImage);
	numeroImage++;
	if (numeroImage == 2) {
		numeroImage = 0;
	}
	setTimeout("incrementationImage()",delaiImage*1000);
}

function changePhoto2(photo2){
        document.images[16].src = image2[photo2].src;
}

function incrementationImage2() {
	changePhoto2(numeroImage2);
	numeroImage2++;
	if (numeroImage2 == 4) {
		numeroImage2 = 0;
	}
	setTimeout("incrementationImage2()",delaiImage2*1000);
}

setTimeout("incrementationImage()",delaiImage*1000);
setTimeout("incrementationImage2()",delaiImage2*1000);


