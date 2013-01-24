module.exports = function (grunt) {

    "use strict";

    var fs = require("fs"),
        async = require("async");

    grunt.registerMultiTask("append-sourcemapping", "Append JavaScript sourcemapping URL comments to files", function () {
        var done = this.async(),
            files = this.data.files;
        async.forEach(Object.keys(files), function (file, callback) {
            fs.appendFile(file, "//@ sourceMappingURL=" + files[file], callback);
        }.bind(this), done);
    });

};