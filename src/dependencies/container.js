const { CommandHandlerFinder } = require('../command-handler-finder')
const { commandHandlers } = require('./command-handlers')

const container = {
  commandHandlerFinder: new CommandHandlerFinder({
    commandHandlers
  })
}

module.exports = { container }
