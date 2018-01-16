/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; */\n\n' +
        },
        jshint: {
            files: ['Gruntfile.js', 'src/<%= pkg.name %>.js'],
            options: {
                browser: true,
                devel: true
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.js']
                }
            }
        },
        concat: {
            options: {
                banner: '<%= meta.banner %>'
            },
            lib: {
                src: ['src/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.js'
            },
            minLib: {
                src: ['dist/<%= pkg.name %>.min.js'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ["chrome 41", "chrome 4", "firefox 37", "firefox 5", "ie 10", "ie_mob 11", "opera 12", "safari 8"]
                    }),
                    require('csswring')()
                ]
            },
            dist: {
                src: 'css/iconate.css',
                dest: 'dist/iconate.min.css'
            }
        },
        watch: {
            css: {
                files: ['css/*.css'],
                tasks: ['postcss'],
                options: {
                    spawn: false
                }
            },
            js: {
                files: ['src/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Dependencies
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('build', [
        'postcss',
        'jshint',
        'uglify',
        'concat'
    ]);
    grunt.registerTask('default', 'build');
};
