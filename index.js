/* jshint node: true */
'use strict';
const path = require('path');

module.exports = {
  name: 'ui-tabs',
  normalizeEntityName: function () { },
  included: function (appOrAddon) {
    this._super.included(app);
    var app = appOrAddon.app || appOrAddon;
    if (!app.registry.availablePlugins['ember-cli-sass']) {
      this.ui.writeLine(chalk.bold('ui-tag: ') + ' did not detect ' + chalk.bold.green('ember-cli-sass') + ', this package\'s styling depends on SASS.');
    } else {
      const sassOptions = app.options.sassOptions || { includePaths: []};
      // app.import('ui-tag/styles/ui-tag.scss');
      sassOptions.includePaths.push(path.join(__dirname, 'ui-tabs'));
    }

  }
};
