module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        concat: {
            main: {
                src: [
                    'js/*.js'// Все JS-файлы в папке
                ],
                dest: 'build/scripts.js' //Итоговый файл
            }
        },
        
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    'build/scripts.min.js': 'build/scripts.js'
                }
            }
        },

        //Задача на случай необходимости конкотинировать css файлы
        // concat_css: {
        //     options: {
        //         // Task-specific options go here.
        //     },
        //     all: {
        //         src: ["/**/*.css"],
        //         dest: "styles.css"
        //     },
        // },

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
            },
            js: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {},
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    //grunt.loadNpmTasks('grunt-concat-css');

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer']);
};