# React-Weather-app

Vous allez créer une web app de météo.
L'idée est la même que sur les applis mobiles, à part qu'ici on prévoit un affichage pour tous les devices (responsive).
Les données météo sont récupérées à partir d'une API gratuite, OpenWeatherMap.
Il existe d'autres API de météo, certaines gratuites. La plupart sont néanmoins payantes.

⚠️Consignes :

- Créez une nouvelle react-app
- Copiez le contenu du repository simplon-roanne / react-weather-app-preview · GitLab et ouvrez la page dans un navigateur pour voir la maquette HTML.
- Découpez le code HTML fourni en composants. Respectez bien les contraintes imposées plus bas. Vous devez obtenir une application React avec le même affichage que la maquette.
- On va commencer par seulement afficher la météo de Lyon. Cherchez donc un moyen de récupérer et d'afficher les données météo ( température, icône, vent ). Des images vous sont fournies dans le dossier icons. Utilisez les !
- Calculez et affichez les 5 prochains jours comme sur la maquette.
- Au clic sur un jour, les données météo doivent changer et le jour de la semaine doit devenir gras.
- C'est bien d'avoir la météo de Lyon mais maintenant il va falloir récupérer la localisation précise de la personne qui ouvre l'app !
- On transforme donc le nom de la ville en propriété dynamique du state
- Au chargement de la page on demande la localisation du visiteur et on envoie cette donnée comme paramètre supplémentaire de la requête API des données météo OpenWeatherMap.

❗ Contraintes obligatoires :

Votre application doit contenir les composants suivants :
- Header.js
- Weather.js
- Days.js
Vous devez utiliser les props pour faire communiquer au moins 2 composants entre eux.

💡 Chemin à suivre, Questions à se poser :

- Penser au découpage de l'application en composants : à quoi ressemble l'application visuellement ? Partez de ce point de départ pour imaginer vos blocs.
-> La web app contiendra :
- un header,

-> le coeur de l'app, le bloc de données météo contenant :
- Le nom de la ville
- Un visuel représentant la météo actuelle
- La température
- La vitesse du vent
- les 5 prochains jours en liste
- Penser au moyen de récupération des données. Il faut utiliser OpenWeatherMap. Mais comment ça marche ? Il faut trouver des exemples et chercher un résultat rapidement.
- 
Faut-il créer un compte ?
Faut-il une clé d'API ?

Tester la récupération des données via une simple requête GET ( = utilisez la barre d'URL pour récupérer les données météo d'une ville ou utiliser le logiciel Postman : outils permettant de tester les requêtes api)
Chercher le code qui fournira les 5 prochains jours de la semaine. Pourquoi pas utiliser une librairie ? La plus connue pour la gestion des dates est Moment.js
Au clic sur les 5 prochains jours, il faut pouvoir afficher les bonnes données. Vous avez déjà tout le code nécessaire, il faut simplement l'ajuster.
Récupérer les données météo des 5 prochains jours au lieu d'aujourd'hui seulement ( 5 days forecast )
Modifier le state de votre component avec les nouvelles données
Afficher les données du jour choisi au clic

💡 Idées pour aller plus loin :

A partir de là, ça se complique un peu.

En plus de la géolocalisation du visiteur, on va aussi proposer l'option de taper manuellement le nom de la ville pour laquelle on veut afficher la météo
Si on pouvait afficher plusieurs villes en même temps, ce serait parfait 🙂
Les villes doivent rester en mémoire entre deux rechargements de page. De cette façon, le visiteur reviendra toujours sur ses villes ! Il faut utiliser le localStorage en JS pour ça.
Et pour finir.... Il faudrait avoir la liste des températures de la journée sous forme de graphiques, comme la météo de Google !

