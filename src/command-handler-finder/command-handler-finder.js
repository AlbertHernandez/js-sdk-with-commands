const { CommandHandlerNotFoundError } = require('./errors')

class CommandHandlerFinder {
  constructor (dependencies) {
    this.commandHandlerByCommandName = this.getCommandHandlersByName(
      dependencies.commandHandlers
    )
  }

  getCommandHandlersByName (commandHandlers) {
    return commandHandlers.reduce((acc, commandHandler) => {
      const commandName = commandHandler.handlesCommand().name
      acc[commandName] = commandHandler
      return acc
    }, {})
  }

  find (command) {
    const commandHandler = this.commandHandlerByCommandName[
      command.constructor.name
    ]

    if (!commandHandler) {
      throw new CommandHandlerNotFoundError(command)
    }

    return commandHandler
  }
}

module.exports = { CommandHandlerFinder }
