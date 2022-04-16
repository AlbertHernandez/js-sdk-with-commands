const {
  SdkClient,
  CreateUserCommand
} = require('../src')

const run = async () => {
  const sdkClient = new SdkClient()

  const command = new CreateUserCommand({
    name: 'pepe'
  })

  const output = await sdkClient.send(command)
  console.log('output: ', output)
}

run()
