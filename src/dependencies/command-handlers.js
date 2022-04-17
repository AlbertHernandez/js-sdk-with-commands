const {
  CreateUserCommandHandler,
  UpdateUserCommandHandler
} = require('../actions')

const commandHandlers = [
  new CreateUserCommandHandler(),
  new UpdateUserCommandHandler()
]

module.exports = { commandHandlers }
