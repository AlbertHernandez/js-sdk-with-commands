class CreateUserCommand {
  constructor (payload) {
    this.name = payload.name
  }
}

module.exports = { CreateUserCommand }
