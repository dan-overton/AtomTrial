module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: { /* Copy css files to dist directory */
      css: {
        files: [
          {expand: true, cwd: 'src', src: ['css/*', 'sass/*'], dest: 'dist/'}
        ],
      },
    },
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['src/index.html']
        }
      },
    },
    sass: {
      development: {
        files: {
          'src/css/atomtrial.css': 'src/sass/main.scss'
        }
      }
    },
    uglify: { /* minify js code */
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/scripts/<%= pkg.name %>.js',
        dest: 'dist/scripts/<%= pkg.name %>.min.js'
      }
    },
    jshint: { /* syntax check the javascript files */
      // define the files to lint
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    watch: {
      less: {
        files: 'src/sass/*.sass',
        tasks: ['sass']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'copy', 'processhtml']);

};
