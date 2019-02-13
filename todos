#!/usr/bin/env node

const axios = require('axios')
const chalk = require('chalk')

const { newTodo, getTodos, completeTodo }= require('./db')

const args = process.argv
const commands = ['new', 'get', 'complete', 'help']

const usage = () => {
	const usageText = `
	todos-cli helps you manage your todos.

	usage:
		todos-cli <command>

		commands can be:

		new:        used to create a new todo
		get:        used to retrieve your todos
		complete:   used to mark a todo as complete
		help:       used to print the usage guide
	`

	console.log(usageText)
}

const errorLog = error => {
	console.log(chalk.bold.redBright(error))
}

if (args.length > 3 && args[2] != 'complete') {
	errorLog('only one argument can be accepted')
	usage()
}

switch (args[2]) {
	case 'help':
		usage()
		break
	case 'new':
		newTodo()
		break
	case 'get':
		getTodos()
		break
	case 'complete':
		completeTodo()
		break
	default:
		errorLog('invalid command passed')
		usage()
}
