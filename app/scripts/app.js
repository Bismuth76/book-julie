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

    title.style.opacity = 0;

    addEventListener('paper-header-transform', function(e) {

      var d = e.detail;
      var m = d.height - d.condensedHeight;

      var opacity = 1 - Math.max(0, (m - d.y) / m);

      title.style.opacity = opacity;

      var shadowSize = Math.round(opacity * 10);
      var shadowSize2 = Math.round(opacity * 3);
      var shadowSize3 = Math.round(opacity);

      toolbar.style['box-shadow'] = '0 ' + shadowSize2 + 'px ' + shadowSize + 'px ' + shadowSize3 + 'px #8A8A8A';

    });

  });

  app._onTileClick = function(event) {
    this.$['fullsize-card'].color = event.detail.data.color;
    //this.$.pages.selected = 1;
    console.log('Ouverture de la tile', event.detail.data);
  };
  app._onFullsizeClick = function(event) {
    //this.$.pages.selected = 0;
    console.log('Ouverture de la tile', event.detail.data);
  };

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

})(document);
