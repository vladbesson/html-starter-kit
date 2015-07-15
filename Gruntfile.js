module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        concat: {
            main: {
                src: [
                    'js/libs/jquery.js',
                    'js/mylibs/**/*.js'  // Все JS-файлы в папке
                ],
                dest: 'js/scripts.js'
            }
        },
        
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'IE 9']
            },
            style: {
                src: 'css/style.css'
            },
        },

        watch: {
            options: {
              livereload: true,
            },
            css: {
                files: ['sass/**/*.scss', 'sass/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                  spawn: false,
                   livereload: true,
                },
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer']);
};