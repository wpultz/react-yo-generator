/**
 * this generator is intended to be run from the root of the project to create an app directory.
 * given the app name, it will create typical react/redux app directories inside a new app directory.
 */
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    prompting: function() {
        var prompts = [{
            name: 'appName',
            message: 'app name?'
        }, {
            name: 'appContainerId',
            message: 'app container id?'
        }];

        return this.prompt(prompts).then(function(answers) {
            this.props = answers;
        }.bind(this));
    },

    writing: {
        actions: function() {
            this.fs.copy(this.templatePath('baseActions.js'), this.destinationPath(this.props.appName + '/actions/index.js'));
        },
        constants: function() {
            this.fs.copy(this.templatePath('baseConstants.js'), this.destinationPath(this.props.appName + '/constants/index.js'));
        },
        reducers: function() {
            this.fs.copy(this.templatePath('baseReducer.js'), this.destinationPath(this.props.appName + '/reducers/index.js'));
        },
        components: function() {
            this.fs.write(this.destinationPath(this.props.appName + '/components/index.js'), '');
        },
        containers: function() {
            this.fs.write(this.destinationPath(this.props.appName + '/containers/index.js'), '');
        },
        store: function() {
            this.fs.copy(this.templatePath('baseStore.js'), this.destinationPath(this.props.appName + '/store/index.js'));
        },
        appFile: function() {
            this.fs.copyTpl(this.templatePath('baseApp.js'), this.destinationPath(this.props.appName + '/app.js'), this.props);
        }
    }
});
