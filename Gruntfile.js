module.exports = function(grunt) {

  // Project configuration.
  
  var libass = "assets";
  var imglobal = libass + "/img";
  var cssglobal = libass + "/css";
  var cssglobalibs = libass + "/css/libs";
  var jsglobal = libass + "/js";
  var jsglobalibs = libass + "/js/libs"; 
  
  grunt.initConfig({
	  
    pkg: grunt.file.readJSON("package.json"),
	
	 
	 /*Grunt Watch-----------------------------------------------*/
	 watch: {
		options: {
		  livereload: true,
		},
		html: {
		  files: ["assets/**/*", "*.php", "*.html"],
		  options: {
                livereload: true
            }
			},
		js: {
		  files: [jsglobalibs + "/*.js", "assets/dev/js/*.js"],
		  tasks: ["uglify"]
		},
		css: {
          files: [cssglobal + "/*.css"],
          tasks: ["cssmin"]
        },
	  },
	 
	 
	 /*JSHINT-------------------------------------------------------*/
	 
	 jshint: {
	   // define the files to lint
	   files: [ jsglobal + "**/*.js"],
	   // configure JSHint (documented at http://www.jshint.com/docs/)
	   options: {
		   curly: true,
           eqeqeq: true,
           eqnull: true,
           browser: true,
	   // more options here if you want to override JSHint defaults
		   globals: {
			 jQuery: true,
			 console: true,
			 module: true
			}
	   }
	 }
	 
  	
  });

  /*
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  Grunt initconfig end
  
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  */

  // Load the plugins that provides each specified task.
  // and register for each the Default task(s).
  
  //Leave this for the end
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-contrib-watch");

};