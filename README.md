# todos-cli

[![Build Status](https://travis-ci.org/cuongw/todos-cli.svg?branch=master)](https://travis-ci.org/cuongw/todos-cli)
![](https://img.shields.io/david/cuongw/todos-cli.svg?style=flat-square)
![](https://img.shields.io/github/license/cuongw/todos-cli.svg?style=flat-square)

> 🦉 Todos CLI with NodeJS.

![todos-cli](https://user-images.githubusercontent.com/34389409/52708081-d88cb280-2fbb-11e9-8eb8-5e33efab3164.png)

## Installation

Clone this project:
```
$ git clone https://github.com/cuongw/todos-cli.git
```
Change directory `todos-cli` & allow execute script:
```
$ cd todos-cli && chmod +x todos
```
Run script anywhere
```
$ npm link
```
Install packages
```
$ npm install
```

## Usage

```
todos <command>

  commands can be:

  new:                        used to create a new todo
  get:                        used to retrieve your todos
  complete <index of todo>:   used to mark a todo as complete
  help:                       used to print the usage guide
```

## Document

[Building CLI Applications with NodeJS](https://scotch.io/tutorials/building-cli-applications-with-nodejs)

## License

MIT
