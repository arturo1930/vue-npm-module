const webpack = require('webpack');
    const merge = require('webpack-merge');
    const path = require('path');

    var commonConfig = {
      output:{
        path: path.resolve(__dirname + '/dist/')
      },
      module:{
        loaders: []
      },
      externals:{},
      plugins:{}
    }

    module.exports=[

     // browser based implementation
    merge(config, {
    entry: path.resolve(__dirname + '/../src/index.js'),
    output: {
        filename: 'vue-preview.min.js',
        libraryTarget: 'window',
        library: 'VuePreview'
    }
    }),

      // for the browser based implementation
      merge(commonConfig,{

      }),

      // for the node based implementation
      merge(commonConfig, {

      })
    ]