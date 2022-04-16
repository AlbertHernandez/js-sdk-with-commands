const { container } = require('./dependencies')

class SdkClient {
  constructor () {
    this.commandHandlerFinder = container.commandHandlerFinder
  }

  async send (command) {
    const commandHandler = this.commandHandlerFinder.find(command)
    return await commandHandler.handle(command)
  }
}

module.exports = { SdkClient }
