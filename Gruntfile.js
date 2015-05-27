module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        bower_concat: {
            all: {
                dest: 'build/_bower.js',
                cssDest: 'build/_bower.css',
                exclude: [
                    'jquery',
                    'modernizr'
                ],
                dependencies: {
                    'underscore': 'jquery',
                    'backbone': 'underscore',
                    'jquery-mousewheel': 'jquery'
                },
                bowerOptions: {
                    relative: false
                }
            }
        },
        
        concat: {
            main: {
                src: [
                    'js/libs/jquery.js',
                    'js/mylibs/**/*.js'  // Все JS-файлы в папке
                ],
                dest: 'build/scripts.js'
            }
        },
        
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'uglify']);
};