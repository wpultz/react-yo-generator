var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    writing: {
	babel: function() {
		this.fs.copy(
			this.templatePath('../../common/templates/babelrc'),
			this.destinationPath('.babelrc')
		)
	},
	editorconfig: function() {
		this.fs.copy(
			this.templatePath('../../common/templates/editorconfig'),
			this.destinationPath('.editorconfig')
		)
	},
	eslint: function() {
		this.fs.copy(
		this.templatePath('../../common/templates/eslintrc'),
			this.destinationPath('.eslintrc')
		)
	}
    }
});
