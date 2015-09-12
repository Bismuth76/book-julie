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

    console.log('Our app is ready to rock!');
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

      //mavhin = 0 alors coleur = 255
      //machin = 1 alors couleur = 9

      title.style.opacity = factor;
      title.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';

      var shadowSize = Math.round(factor * 10);
      var shadowSize2 = Math.round(factor * 3);
      var shadowSize3 = Math.round(factor);

      toolbar.style['box-shadow'] = '0 ' + shadowSize2 + 'px ' + shadowSize + 'px ' + shadowSize3 + 'px #e1e1e1';

    });

    [].forEach.call(items, function(item) {
      item.addEventListener('click', function() {
        [].forEach.call(items, function(item) {
          item.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
          item.querySelector('paper-button').style['border-color'] = item.className.indexOf('active') > -1 ? 'rgb(' + red + ',' + green + ',' + blue + ')' : 'transparent';
        });
      });
    });

  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  app.model = {
    'PocTan': {
      id: 'PocTan',
      name: 'TAN',
      type: 'POC',
      details: 'Ergonomie / Direction Artistique / Webdesign',
      image: 'images/home/TAN.png',
      description: 'Blablabla très long...'
    },
    'ISDEM': {
      id: 'ISDEM',
      name: 'ISDEM',
      type: 'Avant-Vente',
      details: 'Direction Artistique / Webdesign',
      image: 'images/home/ISDEM.png'
    }
  };

  app.currentModel;

})(document);
