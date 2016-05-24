var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    prompting: function() {
        var prompts = [{
            name: 'projectName',
            message: 'project name?'
        }, {
            name: "gitRepo",
            message: "git repo? (ex. wpultz/react-yo-generator)"
        }, {
            name: "author",
            message: "project author?"
        }, {
            name: 'devServerPath',
            message: 'application path?',
            default: 'http://localhost:8000'
        }, {
            name: 'webpackDevServer',
            message: 'webpack dev server path?',
            default: 'http://localhost:8080'
        }];

        return this.prompt(prompts).then(function(props) {
            this.props = props;
        }.bind(this));
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
		this.fs.copyTpl(
			this.templatePath('webpack.config.dev.js'),
			this.destinationPath('webpack.config.dev.js'),
                        this.props
		)
	},
	webpacktests: function() {
		this.fs.copy(
			this.templatePath('tests.webpack.js'),
			this.destinationPath('tests.webpack.js')
		)
	},
	package: function() {
		this.fs.copyTpl(
			this.templatePath('_package.json'),
                	this.destinationPath('package.json'),
                        this.props
        	)
	}

    },

    install: function() {
	this.installDependencies();
    }

});
