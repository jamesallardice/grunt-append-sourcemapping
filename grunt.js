module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({
        lint: {
            files: [
                "grunt.js",
                "tasks/**/*.js"
            ]
        },
        jshint: {
            options:{
                node: true
            }
        }
    });

    grunt.registerTask("default", "lint");

};