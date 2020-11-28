import Fastify from 'fastify'

const fastify = Fastify()

fastify.register(import('./app.js'))

fastify.listen(3000, console.log)
