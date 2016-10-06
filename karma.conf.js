var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    //with file pattern
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx':['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha:{
        //failed after 5 secs
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
