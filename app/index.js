var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    promptUser: function() {
        var done = this.async();
        console.log(this.yeoman);

        var prompts = [{
            name: 'devServerPath',
            message: 'application path?'
            default: 'http://localhost:8000';
        }, {
            name: 'webpackDevServer',
            message: 'webpack dev server path?',
            default: 'http://localhost:8080'
        }];
    },

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
