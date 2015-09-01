var path = require('path')
var appPath = path.resolve(__dirname, 'src', 'index.js')
var stylePath = path.resolve(__dirname, 'src', 'app', 'styles')
var buildPath = path.resolve(__dirname, 'public')
var getConfig = require('ac-webpack')

/**
 * 1. Required
 */
module.exports = getConfig({

  in: appPath, /* [1] */

  out: buildPath, /* [1] */

  stylePath: stylePath,

  cssModules: true,

  /**
   * Production index.html settings. Used to generate dynamic
   * index for both dev & prod.
   */
  html: {

    dev: function (data) {
      return {
        'index.html': [
          '<html>',
            '<head>',
              '<meta charset="utf-8"/>',
              '<meta name="viewport" content="width=device-width, initial-scale=1">',
              '<link href="http://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet" type="text/css">',
              '<script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){' +
              '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),' +
              'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)' +
              '})(window,document,"script","//www.google-analytics.com/analytics.js","ga");' +

              'ga("create", "", "auto");</script>',
            '</head>',
            '<body>',
              '<div id="app"></div>',
              '<script src="/' + data.main + '"></script>',
            '</body>',
          '</html>'
        ].join('')
      }
    },
    prod: function (data) {
      var config = {
        title: 'React Workshop',
        favicon: '/assets/icons/favicon.ico',
        gaId: '',
        errorceptionId: ''
      }

      return {
        'index.html': [
          '<html>',
            '<head>',
              '<meta charset="utf-8"/>',
              '<meta name="viewport" content="width=device-width, initial-scale=1">',
              '<title>' + config.title + '</title>',
              '<link rel="icon" href="' + config.favicon + '" type="image/x-icon" />',
              '<link href="/' + data.css + '" rel="stylesheet" type="text/css" />',
              '<link href="http://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet" type="text/css">',

              '<script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){' +
              '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),' +
              'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)' +
              '})(window,document,"script","//www.google-analytics.com/analytics.js","ga");' +

              'ga("create", "' + config.gaId + '", "auto");</script>',
            '</head>',
            '<body>',
              '<div id="app"></div>',
              '<script src="/' + data.vendors + '"></script>',
              '<script src="/' + data.app + '"></script>',
            '</body>',
          '</html>'
        ].join('')
      }
    }
  },

  /**
   * Files to split into separate vendor bundle. Should only include
   * libraries that aren't likely to change any time soon.
   */
  vendors: [
    'react',
    'react-router',
    'leaflet',
    'leaflet.markercluster',
    'axios'
  ],

  /**
   * Directories to check for module imports
   * see: https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346
   */
  resolves: [
    'src',
    'styles',
    'shared',
    'app',
    'public/assets',
    'testUtils',
    'node_modules'
  ]

})
