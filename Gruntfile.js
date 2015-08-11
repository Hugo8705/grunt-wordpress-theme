module.exports = function(grunt) {

  //Initializing the configuration object
    grunt.initConfig({

    // Task configuration
    less: {
        development: {
            options: {
              compress: true,  //minifying the result
            },
            files: {
              //compiling frontend.less into main.css
              "./public/assets/stylesheets/main.css":"./src/assets/stylesheets/frontend.less"
            }
        }
    },
    concat: {
      options: {
        separator: ';',
      },
      js_frontend: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './src/assets/javascript/frontend.js'
        ],
        dest: './public/assets/javascript/frontend.js',
      },
    },
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      frontend: {
        files: {
          './public/assets/javascript/frontend.js': './public/assets/javascript/frontend.js',
        }
      }
    },
    jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                },
                ignores: [
                    // enter paths to ignore here, e.g., 'src/js/jquery.js'
                ]
            }
    },
    imagemin: {
            main: {     
                  options: {
                    optimizationLevel: 5
                  },
                  files: [{
                     expand: true,
                     cwd: './src/images',
                     src: ['./**/*.{png,jpg,gif}'],
                     dest: './public/images'
                  }]
            },
    },
    watch: {
        js_frontend: {
          files: [
            //watched files
            './bower_components/jquery/dist/jquery.js',
            './bower_components/bootstrap/dist/js/bootstrap.js',
            './src/assets/javascript/frontend.js'
            ],   
          tasks: ['concat:js_frontend', 'uglify:frontend','jshint'],     //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        less: {
          files: ['./src/assets/stylesheets/*.less'],  //watched files
          tasks: ['less'],                          //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        //*****Appelle la tâche de reduction des images*****//
        //imagemin: {
        //  files: ['./src/images/**/*.jpg', './src/images/**/*.jpeg', './src/images/**/*.gif', './src/images/**/*.png'],  //watched files
        //  tasks: ['imagemin'],                          //tasks to run
        //  options: {
        //    livereload: true                        //reloads the browser
        //  }
        //}
      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Task definition
  grunt.registerTask('default', ['watch']);

};