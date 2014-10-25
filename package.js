Package.describe({
  name: 'mirageglobe:html5shivcdn',
  summary: 'CDN base html5shiv for meteorjs',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');
  api.addFiles('mirageglobe:html5shivcdn.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mirageglobe:html5shivcdn');
  api.addFiles('mirageglobe:html5shivcdn-tests.js');
});
