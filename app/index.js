var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    prompting: function() {
        var prompts = [{
            name: 'projectName',
            message: 'project name?'
        }, {
            name: 'projectDir',
            message: 'project directory?',
            default: ''
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
        }, {
            name: 'doInstall',
            message: 'install dependencies?',
            default: true
        }];

        return this.prompt(prompts).then(function(props) {
            if (props.projectDir) {
             //   props.projectDir += '/';
                this.destinationRoot(props.projectDir);
            }
            this.props = props;
        }.bind(this));
    },

    writing: {
	babel: function() {
		this.fs.copy(
			this.templatePath('../../common/templates/_babelrc'),
			this.destinationPath('.babelrc')
		)
	},
	editorconfig: function() {
		this.fs.copy(
			this.templatePath('../../common/templates/_editorconfig'),
			this.destinationPath('.editorconfig')
		)
	},
	eslint: function() {
		this.fs.copy(
		    this.templatePath('../../common/templates/_eslintrc'),
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
			this.templatePath('../../common/templates/webpack.config.dev.js'),
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
			this.templatePath('__package.json'),
                	this.destinationPath('package.json'),
                        this.props
        	)
	}

    },

    install: function() {
        if (this.props.doInstall) {
	    this.installDependencies();
        }
    }

});
