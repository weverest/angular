module.exports = function (grunt){
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/angular/angular.min.js',
                    'app/js/1.js',
                    'app/js/2.js'
                ],
                dest: 'dist/built.js'
            },
            css:{
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'app/css/style.css'
                ],
                dest: 'dist/built.css'
            }
        },
        watch: {
            scripts: {
                files: ['app/js/**/*.js'],
                tasks: ['concat:js']
            },
            css: {
                files: ['app/css/**/*.css'],
                tasks: ['concat:css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'watch'])
};