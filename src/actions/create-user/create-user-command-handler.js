const { CreateUserCommand } = require('./create-user-command')
const { CreateUserCommandOutput } = require('./create-user-command-output')

class CreateUserCommandHandler {
  handlesCommand () {
    return CreateUserCommand
  }

  async handle (command) {
    const output = new CreateUserCommandOutput({
      name: command.name,
      createdAt: new Date()
    })

    return output
  }
}

module.exports = { CreateUserCommandHandler }
