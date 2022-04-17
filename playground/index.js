const {
  SdkClient,
  CreateUserCommand,
  UpdateUserCommand
} = require('../src')

const run = async () => {
  const sdkClient = new SdkClient()

  const createUserCommand = new CreateUserCommand({
    name: 'pepe'
  })

  const createUserCommandOutput = await sdkClient.send(createUserCommand)

  console.log('createUserCommandOutput: ', createUserCommandOutput)

  const updateUserCommand = new UpdateUserCommand({
    id: '1',
    name: 'juan'
  })

  const updateUserCommandOutput = await sdkClient.send(updateUserCommand)

  console.log('updateUserCommandOutput: ', updateUserCommandOutput)
}

run()
