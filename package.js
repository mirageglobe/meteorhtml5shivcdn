/*global Package */
/*jslint nomen : true*/

Package.describe({
  name: 'mirageglobe:html5shivcdn',
  summary: 'CDN base html5shiv for meteorjs',
  version: '1.1.0',
  git: 'https://github.com/mirageglobe/meteorhtml5shivcdn'
});

Package.onUse(function (api) {
  "use strict";
  api.versionsFrom('0.9.4');
  api.addFiles('mirageglobe:html5shivcdn.js', 'client');
});

Package.onTest(function (api) {
  "use strict";
  api.use('tinytest');
  api.use('mirageglobe:html5shivcdn');
  api.addFiles('mirageglobe:html5shivcdn-tests.js', 'client');
});
