module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            main: {
                src: [
                    'js/*.js'
                ],
                dest: 'build/scripts.js'
            }
        },
        
        uglify: {
            main: {
                files: {
                    'build/scripts.min.js': 'build/scripts.js'
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/style.css': 'sass/main.scss'
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

        sprite:{
            all: {
                src: 'img/sprite/*.png',
                dest: 'img/spritesheet.png',
                destCss: 'sass/base/_sprites.scss'
            }
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

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer']);
};