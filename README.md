grunt-append-sourcemapping
==========================

A Grunt task to append JavaScript sourcemapping URL comments to files. The [Google Closure Compiler](https://developers.google.com/closure/compiler/) does not currently append the necessary sourcemapping URL comment to the output it produces, even when you ask it to generate a source map with the `create_source_map` option. This Grunt plugin will add that comment for you.

### Installation

Just install via npm like usual:

    npm install grunt-append-sourcemapping

### Usage

This task assumes that you are using the Closure Compiler to handle JavaScript minification and source map generation. Chances are, you're using the [grunt-closure-compiler](https://github.com/gmarty/grunt-closure-compiler) plugin to do that, so you'll probably have a task in your Grunt file that looks something like this:

```javascript
grunt.initConfig({
    "closure-compiler": {
        includeSourcemap: {
            js: [
                "inputFile.js",
                "inputFile2.js"
            ],
            jsOutputFile: "build/lib.min.js",
            options: {
                create_source_map: "build/lib.min.js.map",
                source_map_format: "V3"
            }
        }
    }
});
```

To append a sourcemapping URL comment at the end of the minified file, you need to tell Grunt to load the new task and then add another section to your config:

```javascript
grunt.loadNpmTasks("grunt-append-sourcemapping"); // Load the task
grunt.initConfig({
    "closure-compiler": {
        // Closure compiler configuration
    },
    "append-sourcemapping": {
        main: {
            files: {
                "build/lib.min.js": "lib.min.js.map"
            }
        }
    } 
});
```

This will append the following comment to the end of *lib.min.js*:

```javascript
//@ sourceMappingURL=lib.min.js.map
```

You can specify any number of files in the `files` property, and as this is a Grunt multitask you can specify different targets too.
