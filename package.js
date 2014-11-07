Package.describe({
  name: 'mirageglobe:html5shivcdn',
  summary: 'CDN base html5shiv for meteorjs',
  version: '1.0.5',
  git: 'https://github.com/mirageglobe/meteorhtml5shivcdn'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');
  api.addFiles('mirageglobe:html5shivcdn.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mirageglobe:html5shivcdn');
  api.addFiles('mirageglobe:html5shivcdn-tests.js','client');
});
