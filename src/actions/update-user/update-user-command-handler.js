const { UpdateUserCommand } = require('./update-user-command')
const { UpdateUserCommandOutput } = require('./update-user-command-output')

class UpdateUserCommandHandler {
  handlesCommand () {
    return UpdateUserCommand
  }

  async handle (command) {
    const output = new UpdateUserCommandOutput({
      id: command.id,
      name: command.name,
      updatedAt: new Date().toISOString()
    })

    return output
  }
}

module.exports = { UpdateUserCommandHandler }
