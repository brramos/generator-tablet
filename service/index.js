'use strict'

const Generator = require('yeoman-generator')
const pc = require('param-case')
const psc = require('pascal-case')
const cc = require('camel-case')

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
    const paramCaseName = pc.paramCase(lowerCaseName)
    const pascalCaseName = psc.pascalCase(lowerCaseName)
    const camelCaseName = cc.camelCase(lowerCaseName)

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
