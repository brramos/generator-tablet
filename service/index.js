'use strict'

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    async prompting() {
        this.answers = await this.prompt([
          {
            type: "input",
            name: "name",
            message: "Service name?"
          }
        ])
    
      }

    writing () {
        const name = this.answers.name
        const lowerCaseName = name.toLowerCase()

        this.fs.copyTpl(
            this.templatePath('_template.service.js'),
            this.destinationPath(`src/client/modules/${lowerCaseName}/${lowerCaseName}.service.js`),
            {
                name,
                lowerCaseName
            }
        )

    }

}
