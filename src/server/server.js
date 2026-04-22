import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyMulti from '@fastify/multipart'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const fastify = Fastify({
  logger: true
})

fastify.register(fastifyMulti, {
  attachFieldsToBody: 'keyValues'
})

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),  
})

fastify.listen({ port: 8888 }, function(err, address) {
  if (err) {
    fastify.log(err)
    process.exit(1)
  }
})