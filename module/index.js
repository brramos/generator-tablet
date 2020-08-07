'use strict'

const Generator = require('yeoman-generator')
const paramCase = require('param-case')
const pascalCase = require('pascal-case')

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

  writing() {
    const name = this.answers.name
    const lowerCaseName = name.toLowerCase()
    const paramCaseName = paramCase(lowerCaseName)
    const pascalCaseName = pascalCase(lowerCaseName)

    this.fs.copyTpl(
      this.templatePath('_template.module.js'),
      this.destinationPath(`src/client/modules/${paramCaseName}/${paramCaseName}.module.js`),
      {
        pascalCaseName
      }
    )
  }

}
