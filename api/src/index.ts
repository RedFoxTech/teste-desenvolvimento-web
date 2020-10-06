import { SetupServer } from './server'
import config from 'config'

process.on('unhandledRejection', (reason, promise) => {
  console.error(
    `App exiting due to an unhandled promise: ${promise} and reason: ${reason}`
  )

  throw reason
});

(async (): Promise<void> => {
  try {
    const server = new SetupServer(config.get('App.port'))
    await server.init()
    server.start()
  } catch (error) {
    console.error(`App exited with error: ${error}`)
    process.exit(1)
  }
})()
