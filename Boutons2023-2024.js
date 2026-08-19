// chargement des boutons

var bouton1 = new Array();var bouton2 = new Array();

for (var i = 0; i<7; i++ ) {bouton1[i] = new Image();}
bouton1[0].src = "Boutons/presentation1.jpg";
bouton1[1].src = "Boutons/archives1.jpg";
bouton1[2].src = "Boutons/2023-20241.jpg";
bouton1[3].src = "Boutons/membres1.jpg";
bouton1[4].src = "Boutons/tournois1.jpg";
bouton1[5].src = "Boutons/crepes1.jpg";
bouton1[6].src = "Boutons/mentions1.jpg";

for (var i = 0; i<7; i++ ) {bouton2[i] = new Image();}
bouton2[0].src = "Boutons/presentation2.jpg";
bouton2[1].src = "Boutons/archives2.jpg";
bouton2[2].src = "Boutons/2023-20242.jpg";
bouton2[3].src = "Boutons/membres2.jpg";
bouton2[4].src = "Boutons/tournois2.jpg";
bouton2[5].src = "Boutons/crepes2.jpg";
bouton2[6].src = "Boutons/mentions2.jpg";

function changeBouton1(numeroBouton){
	n=numeroBouton+1;
	n0=numeroBouton-1;
	document.images[n].src=bouton1[n0].src;
}
function changeBouton2(numeroBouton){
	n=numeroBouton+1;
	n0=numeroBouton-1;
	document.images[n].src=bouton2[n0].src;
}