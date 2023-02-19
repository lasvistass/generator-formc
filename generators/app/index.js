const path = require('path');
const mkdirp = require('mkdirp');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([{
      type    : 'input',
      name    : 'jsonPath',
      message : 'Path to JSON file with form fields:',
      default : 'form-fields.json',
      store   : true
    }]);
  }

  writing() {
    const fields = this.fs.readJSON(this.answers.jsonPath);

    // Create directory for the component
    mkdirp.sync('src/app/components/form');

    // Generate HTML template for the component
    this.fs.copyTpl(
      this.templatePath('form.component.html'),
      this.destinationPath('src/app/components/form/form.component.html'),
      { fields }
    );

    // Generate TypeScript code for the component
    this.fs.copyTpl(
      this.templatePath('form.component.ts'),
      this.destinationPath('src/app/components/form/form.component.ts'),
      { fields }
    );
  }
};
