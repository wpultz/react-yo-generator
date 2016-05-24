var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    prompting: function() {
        var prompts = [{
            name: 'componentType',
            message: 'component type? [(e)s6 class|(s)tateless]',
            default: 'e'
        }, {
            name: 'className',
            message: 'component name?'
        }];

        return this.prompt(prompts).then(function(props) {
            this.props = props;
        }.bind(this));
    },

    writing: {
        testFile: function() {
            var templateFile = 'es6.jsx';
            if (this.props.componentType === 's') {
                templateFile = 'stateless.jsx';
            }

            this.fs.copyTpl(
                this.templatePath(templateFile),
                this.destinationPath(this.props.className + '.jsx'),
                this.props
            );
        }
     }
});
