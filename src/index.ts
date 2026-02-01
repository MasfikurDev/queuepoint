import { buildServer } from './api/server.js'

const server = buildServer()

const PORT = Number(process.env.PORT) || 3000

server.listen({ port: PORT }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }

  server.log.info(`QueuePoint API running at ${address}`)
})
