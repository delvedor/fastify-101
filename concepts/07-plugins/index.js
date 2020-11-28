import Fastify from 'fastify'
import Repeat from './repeat.js'

const fastify = Fastify()

fastify.register(Repeat)
fastify.register(import('./routes.js'))

fastify.listen(3000, console.log)
