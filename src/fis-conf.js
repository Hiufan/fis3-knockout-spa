// fis.config.set('settings.preprocessor.browserify', {
//     // browserify opts 
//     browserify: {
//         debug: true
//     },
// });

fis.match('main.js', {
    release: '$0',
    preprocessor: fis.plugin('browserify', {
        browserify: {
            debug: true,
            paths: ['./', './views', './components'] // 或者paths:['./']
        },
    })
});

