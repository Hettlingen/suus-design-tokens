export default {
    source: ['tokens/**/*.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'dist/',
            files: [
                {
                    destination: 'tokens.css',
                    format: 'css/variables',
                    options: {
                        outputReferences: true
                    }
                }
            ]
        },
        js: {
            transformGroup: 'js',
            buildPath: 'dist/',
            files: [
                {
                    destination: 'tokens.js',
                    format: 'javascript/es6'
                }
            ]
        },
        json: {
            transformGroup: 'js',
            buildPath: 'dist/',
            files: [
                {
                    destination: 'tokens.json',
                    format: 'json/nested'
                }
            ]
        }
    }
};
