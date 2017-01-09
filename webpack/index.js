var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    prompting: function() {
        var prompts = [{
            name: 'devServerPath',
            message: 'Path for web server: ',
            default: 'http://localhost:8000'
        }, {
            name: 'webpackDevServer',
            message: 'Path for webpack-dev-server',
            default: 'http://localhost:8080'
        }];

        return this.prompt(prompts).then(function(props) {
            this.props = props;
        }.bind(this));
    },

    writing: {
	webpack: function() {
            this.fs.copyTpl(
	        this.templatePath('../../common/templates/webpack.config.dev.js'),
	        this.destinationPath('webpack.config.dev.js'),
                this.props
            );
	}
    }
});
