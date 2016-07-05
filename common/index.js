var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    prompting: function() {
        var prompts = [{
            name: 'fileName',
            message: 'file to copy:\n' + 
                '(babel)\t.babelrc\n' + 
                '(es)\t.eslintrc\n' + 
                '(ed)\t.editorconfig\n' +
                '(wpd)\twebpack.config.dev.js\n'
        }];

        return this.prompt(prompts).then(function(props) {
            this.props = props;
        }.bind(this));
    },

    writing: {
	babel: function() {
            if (this.props.fileName === 'babel') {
                this.fs.copy(
		    this.templatePath('_babelrc'),
		    this.destinationPath('.babelrc')
                );
            }
	},
	editorconfig: function() {
            if (this.props.fileName === 'ed') {
		this.fs.copy(
			this.templatePath('_editorconfig'),
			this.destinationPath('.editorconfig')
		);
            }
	},
	eslint: function() {
            if (this.props.fileName === 'es') {
		this.fs.copy(
		    this.templatePath('_eslintrc'),
	    	    this.destinationPath('.eslintrc')
		);
            }
	},
	webpackdev: function() {
            if (this.props.fileName === 'wpd') {
		this.fs.copy(
		    this.templatePath('../../app/templates/webpack.config.dev.js'),
	    	    this.destinationPath('webpack.config.dev.js')
		);
            }
	}
    }
});
