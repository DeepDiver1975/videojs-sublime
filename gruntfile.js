module.exports = function(grunt) {
	grunt.initConfig({

		concat : {
			// Minified vendor versions
			'js-bundle' : {
				src: [
					'node_modules/video.js/dist/video.min.js',
					'src/app.js'
				],
				dest: 'dist/viewer.bundle.js'
			},
			'css-bundle' : {
				src: [
					'node_modules/video.js/dist/video-js.min.css',
					'src/style.css'
				],
				dest: 'dist/viewer.bundle.css'
			},

			// Development Versions
			js : {
				src: [
					'node_modules/video.js/dist/video.js',
					'src/app.js'
				],
				dest: 'dist/viewer.bundle.js'
			},
			css : {
				src: [
					'node_modules/video.js/dist/video-js.css',
					'src/style.css'
				],
				dest: 'dist/viewer.bundle.css'
			}
		},

		copy: {
			'vendor-fonts': {
				files: [{
					expand: true,
					flatten: true,
					src: [
						'node_modules/video.js/dist/font/*'
					],
					dest: 'dist/font/'
				}]
			},
			'vendor-lang': {
				files: [{
					expand: true,
					flatten: true,
					src: [
						'node_modules/video.js/dist/lang/*'
					],
					dest: 'dist/lang/'
				}]
			}
		},

		clean: {
			dist : ['dist']
		},

		// --- Watcher ---------------------------------------------------------

		watch: {
			default: {
				options: {
					spawn: false
				},
				files: [
					"src/**/*.css",
					"src/**/*.js"
				],
				tasks: [
					'concat:js',
					'concat:css'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("_build", [
		'clean',
		'copy',
		'concat:js-bundle',
		'concat:css-bundle'
	]);
	grunt.registerTask("_watch", [
		'clean',
		'copy',
		'concat:js',
		'concat:css',
		'watch'
	]);
};
