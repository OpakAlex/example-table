/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

var pickFiles = require('broccoli-static-compiler');
var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
  srcDir: '/',
  destDir: '/assets/bootstrap'
});
app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');

var mergeTrees = require('broccoli-merge-trees');
module.exports = mergeTrees([app.toTree(), bootstrapFonts], {
	overwrite: true
});
