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
        message: "Service name?"
      }
    ])

  }

  writing() {
    const name = this.answers.name
    const lowerCaseName = name.toLowerCase()
    const paramCaseName = paramCase(lowerCaseName)
    const pascalCaseName = pascalCase(lowerCaseName)
    const camelCaseName = camelCase(lowerCaseName)

    this.fs.copyTpl(
      this.templatePath('_template.service.js'),
      this.destinationPath(`src/client/modules/${paramCaseName}/${paramCaseName}.service.js`),
      {
        pascalCaseName,
        camelCaseName
      }
    )

  }

}
