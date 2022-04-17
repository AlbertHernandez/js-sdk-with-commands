const {
  SdkClient,
  CreateUserCommand
} = require('../src')

const run = async () => {
  const sdkClient = new SdkClient()

  const createUserCommand = new CreateUserCommand({
    name: 'pepe'
  })

  const createUserCommandOutput = await sdkClient.send(createUserCommand)

  console.log('createUserCommandOutput: ', createUserCommandOutput)
}

run()
