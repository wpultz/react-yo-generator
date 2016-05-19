var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	writing: {
		babel: function() {
			this.fs.copy(
				this.templatePath('babelrc'),
				this.destinationPath('.babelrc')
			)
		},
		editorconfig: function() {
			this.fs.copy(
				this.templatePath('editorconfig'),
				this.destinationPath('.editorconfig')
			)
		},
		eslint: function() {
			this.fs.copy(
				this.templatePath('eslintrc'),
				this.destinationPath('.eslintrc')
			)
		},
		karma: function() {
			this.fs.copy(
				this.templatePath('karma.conf.js'),
				this.destinationPath('karma.conf.js')
			)
		},
		webpack: function() {
			this.fs.copy(
				this.templatePath('webpack.config.dev.js'),
				this.destinationPath('webpack.config.dev.js')
			)
		},
		webpacktests: function() {
			this.fs.copy(
				this.templatePath('tests.webpack.js'),
				this.destinationPath('tests.webpack.js')
			)
		},
		package: function() {
			this.fs.copy(
				this.templatePath('_package.json'),
				this.destinationPath('package.json')
			)
		}

	},

	install: function() {
		this.installDependencies();
	}
});
