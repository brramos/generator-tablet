'use strict'

const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  async prompting() {
      this.log(yosay(`Welcome to ${chalk.blue('Tablet\'s')} code generator!`))
      this.log(chalk.green('Useage:'))
      this.log(`${chalk.yellow('Create page:')} yo tablet:page`)
      this.log(`${chalk.yellow('Create directive:')} yo tablet:directive`)
      this.log(`${chalk.yellow('Create service:')} yo tablet:service`)
      this.log(`${chalk.yellow('Create module:')} yo tablet:module`)
  }

}
