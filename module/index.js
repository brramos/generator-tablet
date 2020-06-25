'use strict'

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  async prompting() {
      this.answers = await this.prompt([
        {
          type: "input",
          name: "name",
          message: "Module name?"
        }
      ])

    }

  writing () {
      const name = this.answers.name
      const lowerCaseName = name.toLowerCase()

      this.fs.copyTpl(
          this.templatePath('_template.module.js'),
          this.destinationPath(`src/client/modules/${lowerCaseName}/${lowerCaseName}.module.js`),
          {
              name
          }
      )
  }

}
