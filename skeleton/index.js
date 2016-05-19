var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: {
    actions: function() {
      this.fs.write(this.destinationPath('actions/index.js'), '');
    },
    constants: function() {
      this.fs.write(this.destinationPath('constants/index.js'), '');
    },
    reducers: function() {
      this.fs.write(this.destinationPath('reducers/index.js'), '');
    },
    components: function() {
      this.fs.write(this.destinationPath('components/index.js'), '');
    },
    containers: function() {
      this.fs.write(this.destinationPath('containers/index.js'), '');
    }
  }
})
