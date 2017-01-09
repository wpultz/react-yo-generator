var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    prompting: function() {
        var prompts = [{
            name: 'testType',
            message: 'test type? [(a)ction|(r)educer|(c)omponent]',
            default: 'reducer'
        }, {
            name: 'testName',
            message: 'test name?'
        }, {
            name: 'suiteDesc',
            message: 'suite description?',
            default: 'new test group'
        }];

        return this.prompt(prompts).then(function(props) {
            this.props = props;
        }.bind(this));
    },

    writing: {
        testFile: function() {
            var templateFile;
            if (this.props.testType === 'r') {
                templateFile = 'reducer.js';
            } else if (this.props.testType === 'a') {
                templateFile = 'action.js';
            } else if (this.props.testType === 'c') {
                templateFile = 'enzyme.js';
            }

            if (templateFile) {
                this.fs.copyTpl(
                    this.templatePath(templateFile),
                    this.destinationPath(this.props.testName),
                    this.props
                );
            }
        }
     }
});
