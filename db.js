const chalk = require('chalk')
const rl = require('readline')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const args = process.argv

db.defaults({ todos: [] })
	.write()

const prompt = question => {
  const r = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  return new Promise((resolve, error) => {
    r.question(question, answer => {
      r.close()
      resolve(answer)
    });
  })
}

const newTodo = () => {
	const question = chalk.bold.blue('Type in your todo\n')
	prompt(question).then(todo => {
		db.get('todos')
			.push({
				title: todo,
				complete: false
			})
			.write()
	})
}

const getTodos = () => {
	const todos = db.get('todos').value()
	todos.forEach((todo, index) => {
		const status = todo.complete ? '✔️' : '❌'
		const todoText = `${chalk.whiteBright(index + 1)}. ${chalk.blueBright(todo.title)} ${status}`
		console.log(todoText)
	})
}

const errorLog = error => {
	console.log(chalk.bold.redBright(error))
}

const completeTodo = () => {
	if (args.length != 4) {
		const error = 'invalid number of arguments passed for complete command'
		errorLog(error)
		return
	}

	let n = parseInt(args[3])
	if (isNaN(n)) {
		const error = 'invalid number for complete command'
		errorLog(error)
		return
	}

	let todosLength = db.get('todos').value().length
	if (n > todosLength) {
		const error = 'invalid number passed for complete command'
		errorLog(error)
		return
	}

	db.set(`todos[${n-1}].complete`, true).write()
}

module.exports = {
	newTodo,
	getTodos,
	completeTodo
}