'use strict'

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    async prompting() {
        this.answers = await this.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Directive name?'
          }, {
              type: 'list',
              name: 'path',
              message: 'Where to add directive?',
              choices: ['common', 'modules']
          }
        ])
      }

    writing () {
        const path = this.answers.path
        const name = this.answers.name
        const lowerCaseName = name.toLowerCase()

        this.fs.copyTpl(
            this.templatePath('_template.directive.js'),
            this.destinationPath(`src/client/${path}/${lowerCaseName}/${lowerCaseName}.directive.js`),
            {
                name,
                lowerCaseName
            }
        )

        this.fs.copyTpl(
            this.templatePath('_template.directive.html'),
            this.destinationPath(`src/client/${path}/${lowerCaseName}/${lowerCaseName}.directive.html`),
            {
                lowerCaseName
            }
        )
    }

}
