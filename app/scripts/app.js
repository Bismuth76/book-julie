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

    title.style.opacity = 0;

    var red=255, green=255, blue=255;

    addEventListener('paper-header-transform', function(e) {

      var d = e.detail;
      var m = d.height - d.condensedHeight;

      var factor = 1 - Math.max(0, (m - d.y) / m);

      red = Math.round(255 - factor * (255 - 23));
      green = Math.round(255 - factor * (255 - 27));
      blue = Math.round(255 - factor * (255 - 30));

      [].forEach.call(items, function(item) {
        item.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        item.querySelector('paper-button').style['border-color'] = item.className.indexOf('active') > -1 ? 'rgb(' + red + ',' + green + ',' + blue + ')' : 'transparent';
      });

      title.style.opacity = factor;
      title.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';

      var blur = Math.round(factor * 2);
      var verticalShadow = Math.round(factor * 2);
      var spread = Math.round(factor);

      toolbar.style['box-shadow'] = '0 ' + verticalShadow + 'px ' + blur + 'px ' + spread + 'px rgba(0, 0, 0, 0.1)';

    });

    [].forEach.call(items, function(item) {
      item.addEventListener('click', function() {
        [].forEach.call(items, function(item) {
          item.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
          item.querySelector('paper-button').style['border-color'] = item.className.indexOf('active') > -1 ? 'rgb(' + red + ',' + green + ',' + blue + ')' : 'transparent';
        });
      });
    });

    document.querySelector('#contact-form .pink-button').addEventListener('click', function() {
      var form = document.querySelector('#contact-form');
      /*console.log(form.serialize());*/
      form.submit();
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
      type: 'POC',
      details: 'Ergonomie / Direction Artistique / Webdesign',
      image: 'images/home/TAN.png',
      description: 'Le texte est à mettre ici en une seule ligne :)',
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
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/ISDEM.png',
      description: 'Blablabla très long...',
      images: [
        'images/book/VISUELS_ISDEM/01.png',
        'images/book/VISUELS_ISDEM/02.png',
        'images/book/VISUELS_ISDEM/03.png'
      ]
    },
    'BPATL': {
      id: 'BPATL',
      name: 'BP-ATL',
      type: 'Projet',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/BPATL.png',
      description: 'Blablabla très long...',
      images: [
        'images/book/VISUELS_BPATL/01.png',
        'images/book/VISUELS_BPATL/02.png'
      ]
    },
    'I-BP': {
      id: 'I-BP',
      name: 'i-BP',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/I_BP.png',
      description: 'Blablabla très long...',
      images: [
        'images/book/VISUELS_I_BP/01.png',
        'images/book/VISUELS_I_BP/02.png',
        'images/book/VISUELS_I_BP/03.png'
      ]
    },
    'GUIMIER': {
      id: 'GUIMIER',
      name: 'GUIMIER',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/GUIMIER.png',
      description: 'Blablabla très long...',
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
      type: 'Cheat Sheet',
      details: 'Direction Artistique',
      image: 'images/home/DOCKER.png',
      description: 'Blablabla très long...',
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
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/MPA.png',
      description: 'Blablabla très long...',
      images: [
        'images/book/VISUELS_MPA/01.png',
        'images/book/VISUELS_MPA/02.png',
        'images/book/VISUELS_MPA/03.png'
      ]
    },
    '24H': {
      id: '24H',
      name: '24H DU MANS',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/24H.png',
      description: 'Blablabla très long...',
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
      type: 'Projet',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/NESTLE_WATERS.png',
      description: 'Blablabla très long...',
      images: [
        'images/book/VISUELS_NESTLE_WATERS/01.png',
        'images/book/VISUELS_NESTLE_WATERS/02.png',
        'images/book/VISUELS_NESTLE_WATERS/03.png'
      ]
    },
    'PENIBILITE': {
      id: 'PENIBILITE',
      name: 'Pénibilité',
      type: 'POC',
      details: 'Ergonomie / Direction Artistique / Webdesign',
      image: 'images/home/POC_PENIBILITE.png',
      description: 'Blablabla très long...',
      images: [
        'images/book/VISUELS_POC_PENIBILITE/01.png'
      ]
    },
    'IMMO': {
      id: 'IMMO',
      name: 'Agence Immobilière',
      type: 'POC',
      details: 'Ergonomie / Direction Artistique / Webdesign',
      image: 'images/home/POC_IMMO.png',
      description: 'Blablabla très long...',
      images: [
        'images/book/VISUELS_POC_IMMO/01.png',
        'images/book/VISUELS_POC_IMMO/02.png'
      ]
    },
    'CBP': {
      id: 'CBP',
      name: 'CBP',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/CBP.png',
      description: 'Blablabla très long...',
      images: [
        'images/book/VISUELS_CBP/01.png',
        'images/book/VISUELS_CBP/02.png'
      ]
    },
    'MEETUP': {
      id: 'MEETUP',
      name: 'MEETUP',
      type: 'Projet interne',
      details: 'Direction Artistique',
      image: 'images/home/MEETUP.png',
      description: 'Blablabla très long...',
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
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/ENS_RENNES.png',
      description: 'Blablabla très long...',
      images: [
        'images/book/VISUELS_ENS_RENNES/01.png',
        'images/book/VISUELS_ENS_RENNES/02.png'
      ]
    },
    'FONTEVRAUD': {
      id: 'FONTEVRAUD',
      name: 'FONTEVRAUD',
      type: 'Projet',
      details: 'Webdesign',
      image: 'images/home/FONTEVRAUD.png',
      description: 'Blablabla très long...',
      images: [
        'images/book/VISUELS_FONTEVRAUD/01.png',
        'images/book/VISUELS_FONTEVRAUD/02.png',
        'images/book/VISUELS_FONTEVRAUD/03.png',
        'images/book/VISUELS_FONTEVRAUD/04.png'
      ]
    },
    'FRANSBONHOMME': {
      id: 'FRANSBONHOMME',
      name: 'FRANSBONHOMME',
      type: 'Projet',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/FRANSBONHOMME.png',
      description: 'Blablabla très long...',
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
