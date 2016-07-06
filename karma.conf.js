// Karma configuration
// Generated on Wed Jul 06 2016 08:08:24 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['mocha'],
    files: [
      'spec/*.js',
      {pattern: 'src/*.js', included: false}
    ],
    exclude: [ ],
    preprocessors: {
        'spec/*.js': ['rollup'],
        'src/*.js': ['rollup'],
    },
    reporters: ['progress'],
    port: 9076,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    rollupPreprocessor: {
        rollup: {
        },
        bundle: {
            sourceMap: 'inline'
        }
    }
  })
}
