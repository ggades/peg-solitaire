/**
 *
 * @author Guilherme Gades Vargas
 * @version 1.0.0
 **/
"use strict";

module.exports = function (grunt) {
    grunt.initConfig({

        watch: {
            default: {
                files: ['css/less/**.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
        },

        less: {
            default: {
                options: {
                    paths: ["css/less"],
                    cleancss: true,
                    compress: true
                },
                files: {
                    "css/styles.css": "css/less/main.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less', 'watch']);
}