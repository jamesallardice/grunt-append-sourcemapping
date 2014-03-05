module.exports = function (grunt) {

    "use strict";

    var fs = require("fs"),
        async = require("async");

    grunt.registerMultiTask("append-sourcemapping", "Append JavaScript sourcemapping URL comments to files", function () {
        var done = this.async(),
            files = this.data.files;
        async.forEach(Object.keys(files), function (file, callback) {
            fs.readFile(file, function(err, data) {
                if (err) {throw err;}
                if(!data.toString().match(/\/\/@ sourceMappingURL=[^\n]*\n\*\/$/)) {
                    fs.appendFile(file, "/*\n//@ sourceMappingURL=" + files[file] + "\n*/", callback);
                } else {
                    callback.call(this);
                }
            });
        }.bind(this), done);
    });

};