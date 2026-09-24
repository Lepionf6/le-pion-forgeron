/* Oscillation précise du titre dans sa seule zone centrale. */
(function () {
    const zone = document.getElementById('zoneTitre');
    const titre = document.getElementById('titrePionForgeron');
    if (!zone || !titre) return;

    let direction = 1;
    let position = 0;
    let dernier = null;
    const vitesse = 45; // pixels/seconde

    function limite() {
        return Math.max(0, zone.clientWidth - titre.offsetWidth);
    }

    function animation(temps) {
        if (dernier === null) dernier = temps;
        const dt = Math.min(50, temps - dernier) / 1000;
        dernier = temps;

        const max = limite();
        position += direction * vitesse * dt;

        if (position >= max) {
            position = max;
            direction = -1;
        } else if (position <= 0) {
            position = 0;
            direction = 1;
        }

        titre.style.transform = 'translate(' + position + 'px, -50%)';
        requestAnimationFrame(animation);
    }

    /* Recalcule la position si la fenêtre change de taille. */
    window.addEventListener('resize', function () {
        position = Math.min(position, limite());
    });

    /* Désactive l'animation CSS pour laisser le JS la piloter précisément. */
    titre.style.animation = 'none';
    requestAnimationFrame(animation);
})();

