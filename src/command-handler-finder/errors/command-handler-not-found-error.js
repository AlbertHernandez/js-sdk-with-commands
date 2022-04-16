class CommandHandlerNotFoundError extends Error {
  constructor (command) {
    super(
      `Command Handler not found for the command "${command.constructor.name}"`
    )
  }
}

module.exports = { CommandHandlerNotFoundError }
