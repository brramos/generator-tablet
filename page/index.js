'use strict'

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  async prompting() {
      this.answers = await this.prompt([
        {
          type: "input",
          name: "name",
          message: "Page name?"
        }
      ])

    }

  writing () {
      const name = this.answers.name
      const lowerCaseName = name.toLowerCase()

      // route service
      this.fs.copyTpl(
          this.templatePath('_template-route.service.js'),
          this.destinationPath(`src/client/modules/${lowerCaseName}/${lowerCaseName}-route.service.js`),
          {
              name,
              lowerCaseName
          }
      )

      // controller
      this.fs.copyTpl(
          this.templatePath('_template.controller.js'),
          this.destinationPath(`src/client/modules/${lowerCaseName}/${lowerCaseName}.controller.js`),
          {
              name,
              lowerCaseName
          }
      )

      // module
      this.fs.copyTpl(
          this.templatePath('_template.module.js'),
          this.destinationPath(`src/client/modules/${lowerCaseName}/${lowerCaseName}.module.js`),
          {
              name
          }
      )

      // page
      this.fs.copyTpl(
          this.templatePath('_template.page.html'),
          this.destinationPath(`src/client/modules/${lowerCaseName}/${lowerCaseName}.page.html`),
          {
              name,
              lowerCaseName
          }
      )
  }

}
