'use strict'

const Generator = require('yeoman-generator')
import { paramCase } from 'param-case'
import { pascalCase } from 'pascal-case'
import { camelCase } from 'camel-case'

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

  writing() {
    const path = this.answers.path
    const name = this.answers.name
    const lowerCaseName = name.toLowerCase()
    const paramCaseName = paramCase(lowerCaseName)
    const pascalCaseName = pascalCase(lowerCaseName)
    const camelCaseName = camelCase(lowerCaseName)

    this.fs.copyTpl(
      this.templatePath('_template.directive.js'),
      this.destinationPath(`src/client/${path}/${paramCaseName}/${paramCaseName}.directive.js`),
      {
        pascalCaseName,
        camelCaseName
      }
    )

    this.fs.copyTpl(
      this.templatePath('_template.directive.ios.html'),
      this.destinationPath(`src/client/${path}/${paramCaseName}/${paramCaseName}.directive.ios.html`),
      {
        paramCaseName,
        camelCaseName
      }
    )

    this.fs.copyTpl(
      this.templatePath('_template.directive.android.html'),
      this.destinationPath(`src/client/${path}/${paramCaseName}/${paramCaseName}.directive.android.html`),
      {
        paramCaseName,
        camelCaseName
      }
    )
  }

}
