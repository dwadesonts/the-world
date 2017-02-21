module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        // spawn must be false for bsReload tasks to work correctly
        spawn: false
      },
      css: {
        files: ['stylesheets/styles.css'],
        tasks: ['bsReload:css']
      },
      js: {
        files: ['javascript/index.js'],
        tasks: ['bsReload:js']
      },
      html: {
        files: ['index.html'],
        tasks: ['bsReload:html']
      }
    },

    // make sure to call the 'browserSync:xxxx' task rather than just 'browserSync' so it doesn't try to serve multiple things
    browserSync: {
      dist: {
        options: {
          // background must be true in order for grunt watch task to run
          background: true,
          browser: 'google chrome',
          server: {
            baseDir: './'
          }
        }
      }
    },

    bsReload: {
      css: {
        reload: "stylesheets/styles.css"
      },
      js: {
        reload: 'javascript/index.js'
      },
      html: {
        reload: 'index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // default task builds dev and launches browserSync for live reload.
  grunt.registerTask('default', ['browserSync:dist', 'watch']);
};
