var path = require('path');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON(path.join(__dirname, 'package.json')),
        requirejs: {
            compile: {
                options: require(path.join(__dirname, 'tools', 'build.js'))
            }
        },
        less: {
            production: {
                options: {
                    paths: [
                        path.join(__dirname, 'src', 'style'),
                        path.join(__dirname, 'bower_components')
                    ],
                    cleancss: true,
                    compress: true
                },
                files: {
                    "dist/style/demo.css": "src/style/demo.less"
                }
            }
        },
        bower: {
            target: {
                rjsConfig: path.join(__dirname, 'src', 'js', 'app.js')
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['bower', 'requirejs', 'less']);
};