class CreateUserCommandOutput {
  constructor (payload) {
    this.name = payload.name
    this.createdAt = payload.createdAt
  }
}

module.exports = { CreateUserCommandOutput }
