'use strict'

const Generator = require('yeoman-generator')
const paramCase = require('param-case')
const pascalCase = require('pascal-case')
const camelCase = require('camel-case')

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Page name? (Hello World)"
      }
    ])

  }

  writing() {
    const name = this.answers.name
    const lowerCaseName = name.toLowerCase()
    const paramCaseName = paramCase(lowerCaseName)
    const pascalCaseName = pascalCase(lowerCaseName)
    const camelCaseName = camelCase(lowerCaseName)

    // route service
    this.fs.copyTpl(
      this.templatePath('_template-route.service.js'),
      this.destinationPath(`src/client/modules/${paramCaseName}/${paramCaseName}-route.service.js`),
      {
        name,
        pascalCaseName,
        camelCaseName
      }
    )

    // controller
    this.fs.copyTpl(
      this.templatePath('_template.controller.js'),
      this.destinationPath(`src/client/modules/${paramCaseName}/${paramCaseName}.controller.js`),
      {
        pascalCaseName,
        camelCaseName
      }
    )

    // module
    this.fs.copyTpl(
      this.templatePath('_template.module.js'),
      this.destinationPath(`src/client/modules/${paramCaseName}/${paramCaseName}.module.js`),
      {
        pascalCaseName
      }
    )

    // page
    this.fs.copyTpl(
      this.templatePath('_template.page.ios.html'),
      this.destinationPath(`src/client/modules/${paramCaseName}/${paramCaseName}.page.ios.html`),
      {
        name,
        paramCaseName
      }
    )

    this.fs.copyTpl(
      this.templatePath('_template.page.android.html'),
      this.destinationPath(`src/client/modules/${paramCaseName}/${paramCaseName}.page.android.html`),
      {
        name,
        paramCaseName
      }
    )
  }

}
