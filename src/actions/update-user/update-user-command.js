class UpdateUserCommand {
  constructor (payload) {
    this.id = payload.id
    this.name = payload.name
  }
}

module.exports = { UpdateUserCommand }
