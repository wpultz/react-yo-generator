var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    prompting: function() {
        var prompts = [{
            name: 'fileName',
            message: 'file to copy:\n(babel)\t.babelrc\n(es)\t.eslintrc\n(ed)\t.editorconfig\n'
        }];

        return this.prompt(prompts).then(function(props) {
            this.props = props;
        }.bind(this));
    },

    writing: {
	babel: function() {
            if (this.props.fileName === 'babel') {
                this.fs.copy(
		    this.templatePath('../../common/templates/_babelrc'),
		    this.destinationPath('.babelrc')
                );
            }
	},
	editorconfig: function() {
            if (this.props.fileName === 'ed') {
		this.fs.copy(
			this.templatePath('../../common/templates/_editorconfig'),
			this.destinationPath('.editorconfig')
		);
            }
	},
	eslint: function() {
            if (this.props.fileName === 'es') {
		this.fs.copy(
		    this.templatePath('../../common/templates/_eslintrc'),
	    	    this.destinationPath('.eslintrc')
		);
            }
	}
    }
});
