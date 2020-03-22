# Argumentaire

## Technologie choisie

J'ai choisi de m'intéresser à pa11y, un package npm permettant de détecter les eventuels problèmes d'accessiblité sur les différentes page de notre pwa.
Le package nécéssitant d'installer Chromium, le temps de téléchargement peut-être relativement long.

## Comment ça marche ?

Pour faire fonctionner pa11y, j'ai écrit le code suivant dans `app.js`

```javascript
const pa11y = require('pa11y') // On récupère le module

pa11y(`${process.env.FRONT_URL}:${process.env.PORT}`).then((results) => {
  if (typeof results.issues !== 'undefined' && results.issues.length > 0) {
    // Si cette condition est vérifiée, alors pa11y a trouvé des problèmes d'accessibilité dans l'app. On les mets dans la console node (donc visible sur le terminal)
    console.warn('Il y a des problèmes d\'accessibilité sur votre app. Voir ci dessous !')
    console.error(results)
  } else {
    // Sinon, on affiche un message pour indiquer qu'aucun problème n'a été detecté !
    console.log(`Félicitations, aucun problème d\'accessibilité detecté sur ${process.env.FRONT_URL}:${process.env.PORT} !`)
  }
});```