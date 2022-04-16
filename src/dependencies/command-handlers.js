const { CreateUserCommandHandler } = require('../actions')

const commandHandlers = [
  new CreateUserCommandHandler()
]

module.exports = { commandHandlers }
