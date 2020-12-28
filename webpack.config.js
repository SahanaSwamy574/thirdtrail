module.exports = {
    entry: [ 
        './index.js',
        './throttle.js',
        './debounce.js'
      ],
      output: {
        filename: 'main.js',
        path: __dirname + '/dist'
      }
     
};
