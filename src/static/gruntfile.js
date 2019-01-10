
// Be sure to change the relative path next time for grunt
module.exports = function (grunt) {
  // scripts
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded',
        },
        files: {
          'css/bootstrap.css': 'stylesheets/bootstrap.scss',
        },
      },
    },
    autoprefixer: {
      compile: {
        files: {
          'css/bootstrap.css': 'css/bootstrap.css',
        },
      },
    },
    watch: {
      css: {
        files: ['stylesheets/**/*.scss'],
        tasks: ['sass'],
      },
    },
    connect: {
      server: {
        options: {
          port: 2710,
          keepalive: false,
        },
      },
    },
  });


  // load tasks and register tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('server', ['sass', 'autoprefixer', 'connect', 'watch']);
};
