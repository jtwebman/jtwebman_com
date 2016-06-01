exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: "js/app.js"

      // To use a separate vendor.js bundle, specify two files path
      // https://github.com/brunch/brunch/blob/stable/docs/config.md#files
      // joinTo: {
      //  "js/app.js": /^(web\/static\/js)/,
      //  "js/vendor.js": /^(web\/static\/vendor)|(deps)/
      // }
      //
      // To change the order of concatenation of files, explicitly mention here
      // https://github.com/brunch/brunch/tree/master/docs#concatenation
      // order: {
      //   before: [
      //     "web/static/vendor/js/jquery-2.1.1.js",
      //     "web/static/vendor/js/bootstrap.min.js"
      //   ]
      // }
    },
    stylesheets: {
      joinTo: "css/app.css"
    },
    templates: {
      joinTo: "js/app.js"
    }
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to "/web/static/assets". Files in this directory
    // will be copied to `paths.public`, which is "priv/static" by default.
    assets: [
      /^(web\/static\/assets)/,
      /^(node_modules\/font-awesome)/
    ]
  },

  // Phoenix paths configuration
  paths: {
    // Dependencies and current project directories to watch
    watched: [
      "web/static",
      "test/static",
      "node_modules/font-awesome/fonts/fontawesome-webfont.eot",
      "node_modules/font-awesome/fonts/fontawesome-webfont.svg",
      "node_modules/font-awesome/fonts/fontawesome-webfont.ttf",
      "node_modules/font-awesome/fonts/fontawesome-webfont.woff",
      "node_modules/font-awesome/fonts/fontawesome-webfont.woff2"
    ],

    // Where to compile files to
    public: "priv/static"
  },

  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/web\/static\/vendor/]
    },
    sass: {
      includePaths: ["node_modules/bootstrap-sass/assets/stylesheets"],
      precision: 8 // minimum precision required by bootstrap-sass
    },
    copycat: {
      "fonts": ["node_modules/bootstrap-sass/assets/fonts/bootstrap"] // copy node_modules/bootstrap-sass/assets/fonts/bootstrap/* to priv/static/fonts/
    }
  },

  modules: {
    autoRequire: {
      "js/app.js": [
        "bootstrap-sass", // require bootstrap-sass' JavaScript globally
        "web/static/js/app"
      ]
    }
  },

  npm: {
    enabled: true,
    // Whitelist the npm deps to be pulled in as front-end assets.
    // All other deps in package.json will be excluded from the bundle.
    whitelist: ["phoenix", "phoenix_html", "jquery", "bootstrap-sass"],
    globals: { // bootstrap-sass' JavaScript requires both '$' and 'jQuery' in global scope
      $: "jquery",
      jQuery: "jquery"
    }
  }
};
