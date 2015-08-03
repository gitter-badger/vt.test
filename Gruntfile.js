module.exports = function(grunt) {
    'use strict';

    // Unified Watch Object
    var watchFiles = {
        clientSass: ['src/**/Resources/public/sass/*.{scss,sass}']
            .concat(['web/assets/sass/**/*.{scss,sass}', 'web/assets/sass/*.{scss,sass}'])
    };

    // -----------------------------------------------------------------
    // Grunt requirements
    // -----------------------------------------------------------------

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', 'sass-*']
    });
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // -----------------------------------------------------------------
    // Grunt Setup: Project configuration.
    // -----------------------------------------------------------------
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            clientSass: {
                files: watchFiles.clientSass,
                tasks: [
                    'scsslint',
                    'sass_import_compiler:src',
                    'sass:development',
                    'autoprefixer'
                ],
                options: {
                    interval: 300,
                    livereload: true
                }
            }
        },

        scsslint: {
            allFiles: watchFiles.clientSass,
            options: {
                colorizeOutput: true,
                config: '.scss-lint.yml',
                reporterOutput: 'app/build/lint/scss-lint-report.xml'
            }
        },
        sass_import_compiler: {
            src: {
                files: {
                    'web/assets/css/application.scss': watchFiles.clientSass
                }
            }
        },
        sass: {
            options: {
                sourcemap: 'none',
                update: true
            },
            development: {
                options: {
                    lineNumbers: true
                },
                files: {
                    'web/assets/css/application.css': 'web/assets/css/application.scss'
                }
            },
            production: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'web/assets/css/application.min.css': 'web/assets/css/application.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                expand: true,
                src: ['web/assets/css/application.css']
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        bower: {
            install: {
                options: {
                    install: true,
                    copy: false
                }
            }
        }
    });

    // -----------------------------------------------------------------
    // Specify tasks to be executed in terminal.
    // -----------------------------------------------------------------

    // Lint task
    grunt.registerTask('lint', ['scsslint']);

    // Minify task
    grunt.registerTask('minify', ['sass:production', 'uglify', 'htmlmin', 'imagemin']);

    // Test tasks
    grunt.registerTask('test', ['karma:unit']);

    // Default task
    grunt.registerTask('default', [
    //    'lint',
        'sass_import_compiler:src',
        'sass:development',
        'autoprefixer',
        'watch'
    ]);
};
