class UpdateUserCommandOutput {
  constructor (payload) {
    this.id = payload.id
    this.name = payload.name
    this.updatedAt = payload.updatedAt
  }
}

module.exports = { UpdateUserCommandOutput }
