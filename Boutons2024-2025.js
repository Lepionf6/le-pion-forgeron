// chargement des boutons

var bouton1 = new Array();var bouton2 = new Array();

for (var i = 0; i<10; i++ ) {bouton1[i] = new Image();}
bouton1[0].src = "Boutons/presentation1.jpg";
bouton1[1].src = "Boutons/archives1.jpg";
bouton1[2].src = "Boutons/2024-20251.jpg";
bouton1[3].src = "Boutons/membres1.jpg";
bouton1[4].src = "Boutons/tournois1.jpg";
bouton1[5].src = "Boutons/stands1.jpg";
bouton1[6].src = "Boutons/crepes1.jpg";
bouton1[7].src = "Boutons/nuit echecs1.jpg";
bouton1[8].src = "Boutons/triclub1.jpg";
bouton1[9].src = "Boutons/mentions1.jpg";

for (var i = 0; i<10; i++ ) {bouton2[i] = new Image();}
bouton2[0].src = "Boutons/presentation2.jpg";
bouton2[1].src = "Boutons/archives2.jpg";
bouton2[2].src = "Boutons/2024-20252.jpg";
bouton2[3].src = "Boutons/membres2.jpg";
bouton2[4].src = "Boutons/tournois2.jpg";
bouton2[5].src = "Boutons/stands2.jpg";
bouton2[6].src = "Boutons/crepes2.jpg";
bouton2[7].src = "Boutons/nuit echecs2.jpg";
bouton2[8].src = "Boutons/triclub2.jpg";
bouton2[9].src = "Boutons/mentions2.jpg";

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