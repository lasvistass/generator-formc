const path = require('path');
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
};
