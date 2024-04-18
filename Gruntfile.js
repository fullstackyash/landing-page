module.exports = function( grunt ) {

	'use strict';

	const sass = require('node-sass');

	// Project configuration
	grunt.initConfig( {

		pkg: grunt.file.readJSON( 'package.json' ),
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {
					'dist/css/index.css': 'src/assets/styles/style.scss'
				}
			}
		},
		concat: {
			"options": { "separator": ";" },
			"build": {
				"src": ["src/assets/scripts/front.js"],
				"dest": "dist/js/index.js"
			}
		},
		uglify: {
			dist: {
			  files: {
				'dist/js/index.min.js': ["dist/js/index.js"]
			  }
			}
		},
		watch: {
			files: ['src/assets/styles/*.scss'],
			tasks: ['css']
		},
		cssmin: {
			build: {
				src: 'dist/css/index.css',
				dest: 'dist/css/index.min.css'
			}
		},
	} );

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// Task definitions
	grunt.registerTask( 'default', ['sass', 'cssmin', 'concat', 'uglify'] );
	grunt.registerTask( 'css', ['sass', 'cssmin'] );

	grunt.util.linefeed = '\n';
};
