/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {

    var title = document.querySelector('.app-name');
    var toolbar = document.querySelector('paper-toolbar');
    var items = document.querySelectorAll('.menu-item');

    var processItemsColor = function(item) {
      item.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
      item.querySelector('paper-button').style['border-color'] = item.className.indexOf('active') > -1 ? 'rgb(' + red + ',' + green + ',' + blue + ')' : 'transparent';
    };

    title.style.opacity = 0;

    var red=255, green=255, blue=255;

    addEventListener('paper-header-transform', function(e) {

      var d = e.detail;
      var m = d.height - d.condensedHeight;

      var factor = 1 - Math.max(0, (m - d.y) / m);

      red = Math.round(255 - factor * (255 - 23));
      green = Math.round(255 - factor * (255 - 27));
      blue = Math.round(255 - factor * (255 - 30));

      [].forEach.call(items, processItemsColor);

      title.style.opacity = factor;
      title.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';

      var blur = Math.round(factor * 2);
      var verticalShadow = Math.round(factor * 2);
      var spread = Math.round(factor);

      toolbar.style['box-shadow'] = '0 ' + verticalShadow + 'px ' + blur + 'px ' + spread + 'px rgba(0, 0, 0, 0.1)';

    });

    [].forEach.call(items, function(item) {
      item.addEventListener('click', function() {
        [].forEach.call(items, processItemsColor);
      });
    });

    title.addEventListener('click', function() {
      Polymer.Base.async(function() {
        [].forEach.call(items, processItemsColor);
      }, 10);
    });

    document.querySelector('#contact-form .pink-button').addEventListener('click', function() {
      var form = document.querySelector('#contact-form');
      app.contactSending = true;
      form.submit();
    });

    document.querySelector('#contact-form').addEventListener('iron-form-response', function(event) {
      app.contactSending = false;
      app.contactSent = true;
      Polymer.Base.async(function() {
        app.contactSent = false;
      }, 20000);
    });

    Polymer.Base.$$('#book-detail-container .book-detail-description-title').addEventListener('click', function() {
      Polymer.Base.toggleClass('opened', Polymer.Base.$$('#book-detail-container').className.indexOf('opened') === -1, Polymer.Base.$$('#book-detail-container'));
    });

  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  app.model = {
    'POC-TAN': {
      id: 'POC-TAN',
      name: 'TAN',
      fullName: 'TAN',
      type: 'POC',
      details: 'Ergonomie / Direction Artistique / Webdesign',
      image: 'images/home/TAN.png',
      description: 'Proof Of Concept : travail d’ergonomie, de direction artistique et de webdesign pour la partie web (smartphone et montre connectée). L’idée étant de proposer à la Tan plusieurs axes d’amélioration sur son application dont, notamment, l’intégration de la géolocalisation afin d’avoir en temps réel les arrêts des bus/tram/busway à proximité et la possibilité de paramétrer des alarmes (dernier bus/tram, partir au travail,…). Et pour exprimer cette évolution de manière concrète, il a fallu réaliser des « use cases » sous forme de story tellings, dans un packaging à la charte du client.',
      images: [
        'images/book/VISUELS_POC_TAN/01.png',
        'images/book/VISUELS_POC_TAN/02.png',
        'images/book/VISUELS_POC_TAN/03.png',
        'images/book/VISUELS_POC_TAN/04.png',
        'images/book/VISUELS_POC_TAN/05.png',
        'images/book/VISUELS_POC_TAN/06.png'
      ]
    },
    'ISDEM': {
      id: 'ISDEM',
      name: 'ISDEM',
      fullName: 'ISDEM',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/ISDEM.png',
      description: 'Avant-Vente : travail de direction artistique et de webdesign (desktop, tablette et smartphone) en responsive. Ce nouveau site a pour but de sensibiliser les gens à la protection des espèces maritimes en Bretagne. Design from scratch incluant la réalisation d’illustrations d’oiseaux (cf : smartphone) et d’un logo servant de point de départ à la déclinaison des Homes.',
      images: [
        'images/book/VISUELS_ISDEM/01.png',
        'images/book/VISUELS_ISDEM/02.png',
        'images/book/VISUELS_ISDEM/03.png'
      ]
    },
    'BPATL': {
      id: 'BPATL',
      name: 'BPATL',
      fullName: 'BANQUE POPULAIRE ATLANTIQUE',
      type: 'Projet',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/BPATL.png',
      description: 'Projet : travail de direction artistique et de webdesign sur tablette. Usage réservé aux conseillers lors de leurs rendez-vous clientèle pour faire le point sur les contrats des clients et leur proposer des offres plus adaptées.',
      images: [
        'images/book/VISUELS_BPATL/01.png',
        'images/book/VISUELS_BPATL/02.png'
      ]
    },
    'I-BP': {
      id: 'I-BP',
      name: 'i-BP',
      fullName: 'INFORMATIQUE BANQUE POPULAIRE',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/I_BP.png',
      description: 'Avant-Vente : travail de direction artistique et de webdesign pour l’adaptation de l’application mobile sur Windows 10. Deux propositions ergonomiques et graphiques liées à l’OS.',
      images: [
        'images/book/VISUELS_I_BP/01.png',
        'images/book/VISUELS_I_BP/02.png',
        'images/book/VISUELS_I_BP/03.png'
      ]
    },
    'GUIMIER': {
      id: 'GUIMIER',
      name: 'GUIMIER',
      fullName: 'GUIMIER',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/GUIMIER.png',
      description: 'Avant-Vente : travail de direction artistique et de webdesign. Proposition design pour le nouveau site responsive du client.',
      images: [
        'images/book/VISUELS_GUIMIER/01.png',
        'images/book/VISUELS_GUIMIER/02.png',
        'images/book/VISUELS_GUIMIER/03.png',
        'images/book/VISUELS_GUIMIER/04.png'
      ]
    },
    'DOCKER': {
      id: 'DOCKER',
      name: 'DOCKER',
      fullName: 'DOCKER et GIT',
      type: 'Cheat Sheet',
      details: 'Direction Artistique',
      image: 'images/home/DOCKER.png',
      description: 'Cheat Sheets : travail de direction artistique sur des supports type dépliants destinés à être distribués aux clients/développeurs/candidats à l’embauche sur des événements (DevFest, Breizhcamp, Meetup,…). Il s’agit de morceaux de codes regroupés sur un format simple et pratique pour un public expérimenté.',
      images: [
        'images/book/VISUELS_BREIZHCAMP/01.png',
        'images/book/VISUELS_BREIZHCAMP/02.png',
        'images/book/VISUELS_BREIZHCAMP/03.png',
        'images/book/VISUELS_BREIZHCAMP/04.png',
        'images/book/VISUELS_BREIZHCAMP/05.png',
        'images/book/VISUELS_BREIZHCAMP/06.png'
      ]
    },
    'MPA': {
      id: 'MPA',
      name: 'MPA',
      fullName: 'MUSEE DE PONT-AVEN',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/MPA.png',
      description: 'Avant-Vente : travail de direction artistique et de webdesign. Proposition design pour le nouveau site responsive du client.',
      images: [
        'images/book/VISUELS_MPA/01.png',
        'images/book/VISUELS_MPA/02.png',
        'images/book/VISUELS_MPA/03.png'
      ]
    },
    '24H': {
      id: '24H',
      name: '24H DU MANS',
      fullName: '24 HEURES DU MANS',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/24H.png',
      description: 'Avant-Vente : travail de direction artistique et de webdesign. Proposition en card-based design pour le nouveau site responsive du client.',
      images: [
        'images/book/VISUELS_ACO/01.png',
        'images/book/VISUELS_ACO/02.png',
        'images/book/VISUELS_ACO/03.png',
        'images/book/VISUELS_ACO/04.png'
      ]
    },
    'NESTLE-WATERS': {
      id: 'NESTLE-WATERS',
      name: 'NESTLE WATERS',
      fullName: 'NESTLE WATERS SPONSORING',
      type: 'Projet',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/NESTLE_WATERS.png',
      description: 'Projet : travail de direction artistique et de webdesign. Site destiné exclusivement aux sponsors de Nestlé pour se tenir informés de l’ensemble des événements passés, présents et à venir.',
      images: [
        'images/book/VISUELS_NESTLE_WATERS/01.png',
        'images/book/VISUELS_NESTLE_WATERS/02.png',
        'images/book/VISUELS_NESTLE_WATERS/03.png'
      ]
    },
    'PENIBILITE': {
      id: 'PENIBILITE',
      name: 'Pénibilité',
      fullName: 'PENIBILITE',
      type: 'POC',
      details: 'Ergonomie / Direction Artistique / Webdesign',
      image: 'images/home/POC_PENIBILITE.png',
      description: 'Proof Of Concept : travail d’ergonomie, de direction artistique et de webdesign pour une application destinée aux salariés qui leur permet de quantifier la pénibilité liée à leurs posts, en conformité avec la nouvelle réforme « Prévention de la pénibilité au travail ».',
      images: [
        'images/book/VISUELS_POC_PENIBILITE/01.png'
      ]
    },
    'IMMO': {
      id: 'IMMO',
      name: 'Agence Immobilière',
      fullName: 'AGENCE IMMOBILIERE',
      type: 'POC',
      details: 'Ergonomie / Direction Artistique / Webdesign',
      image: 'images/home/POC_IMMO.png',
      description: 'Proof Of Concept : travail d’ergonomie, de direction artistique et de webdesign. Application destinée à afficher les résultats de recherche d’un utilisateur lorsque celui-ci passe devant une agence immobilière équipée d’un ou plusieurs écrans dans sa vitrine et de balises iBeacon. Dans un premier temps, il reçoit sur son smartphone une notification de l’agence lui indiquant le nombre de résultats qui correspondent à sa recherche. En validant, apparaissent alors plusieurs annonces sous forme de liste et en cliquant sur l’une d’elles, le mobile se transforme en télécommande qui contrôle l’affichage sur l’écran à l’aide de flèches « précédente/suivante ».',
      images: [
        'images/book/VISUELS_POC_IMMO/01.png',
        'images/book/VISUELS_POC_IMMO/02.png'
      ]
    },
    'CBP': {
      id: 'CBP',
      name: 'CBP',
      fullName: 'CBP',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/CBP.png',
      description: 'Avant-Vente : travail de direction artistique et de webdesign. Proposition design pour le nouveau site responsive du client.',
      images: [
        'images/book/VISUELS_CBP/01.png',
        'images/book/VISUELS_CBP/02.png'
      ]
    },
    'MEETUP': {
      id: 'MEETUP',
      name: 'MEETUP',
      fullName: 'MEETUP',
      type: 'Projet interne',
      details: 'Direction Artistique',
      image: 'images/home/MEETUP.png',
      description: 'Affiche : travail de direction artistique. Création d’une affiche pour le Meetup, événement durant lequel certains collaborateurs ont un temps de parole pour exposer leurs connaissances sur des thèmes précis face à un public expérimenté dans le domaine informatique.',
      images: [
        'images/book/VISUELS_MEETUP/01.png',
        'images/book/VISUELS_MEETUP/02.png',
        'images/book/VISUELS_MEETUP/03.png',
        'images/book/VISUELS_MEETUP/04.png'
      ]
    },
    'ENS-RENNES': {
      id: 'ENS-RENNES',
      name: 'ENS Rennes',
      fullName: 'ENS RENNES',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/ENS_RENNES.png',
      description: 'Avant-Vente : travail de direction artistique et de webdesign. Proposition design pour le nouveau site responsive du client.',
      images: [
        'images/book/VISUELS_ENS_RENNES/01.png',
        'images/book/VISUELS_ENS_RENNES/02.png'
      ]
    },
    'FONTEVRAUD': {
      id: 'FONTEVRAUD',
      name: 'FONTEVRAUD',
      fullName: 'ABBAYE DE FONTEVRAUD',
      type: 'Projet',
      details: 'Webdesign',
      image: 'images/home/FONTEVRAUD.png',
      description: 'Projet : travail de webdesign. Déclinaison de la nouvelle charte du site sur la partie mobile.',
      images: [
        'images/book/VISUELS_FONTEVRAUD/01.png',
        'images/book/VISUELS_FONTEVRAUD/02.png',
        'images/book/VISUELS_FONTEVRAUD/03.png',
        'images/book/VISUELS_FONTEVRAUD/04.png'
      ]
    },
    'FRANSBONHOMME': {
      id: 'FRANSBONHOMME',
      name: 'FRANS BONHOMME',
      fullName: 'FRANS BONHOMME',
      type: 'Projet',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/FRANSBONHOMME.png',
      description: 'Projet : travail de direction artistique et de webdesign.',
      images: [
        'images/book/VISUELS_FRANSBONHOMME/01.png',
        'images/book/VISUELS_FRANSBONHOMME/02.png'
      ]
    }
  };

  /*

   <form action="//flipmail.co/api/7kc4YcCwFT0TFC01bBRd" method="post">
   <input type="text" name="name">
   <input type="email" name="email">
   <textarea name="message"></textarea>
   <button type="submit">Submit Form</button>
   </form>


   */

})(document);
