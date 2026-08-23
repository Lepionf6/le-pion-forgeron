function animerTitre() {

    const zone = document.querySelector('.titre-oscillant');
    const titre = document.getElementById('titrePionForgeron');

    if (!zone || !titre) return;

    // Largeur disponible dans la zone
    const largeurZone = zone.clientWidth;

    // Largeur réelle du texte
    const largeurTitre = titre.offsetWidth;

    // Distance exacte à parcourir
    const distance = Math.max(0, largeurZone - largeurTitre);

    // Durée de l'aller-retour en secondes
    const duree = 10;

    titre.animate(
        [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(' + distance + 'px)' }
        ],
        {
            duration: duree * 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        }
    );
}


// Lancement lorsque la page est chargée
window.addEventListener('load', animerTitre);


// Recalcul lors d'un changement de taille de fenêtre
window.addEventListener('resize', animerTitre);