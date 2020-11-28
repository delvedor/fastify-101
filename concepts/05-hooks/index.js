import Fastify from 'fastify'

const fastify = Fastify()

fastify.addHook('onRequest', async (req, reply) => {
  console.log('onRequest')
})

fastify.addHook('preParsing', async (request, reply, payload) => {
  console.log('preParsing')
})

fastify.addHook('preValidation', async (req, reply) => {
  console.log('preValidation')
})

fastify.addHook('preHandler', async (req, reply) => {
  console.log('preHandler')
})

fastify.addHook('preSerialization', async (request, reply, payload) => {
  console.log('preSerialization')
})

fastify.addHook('onSend', async (request, reply, payload) => {
  console.log('onSend')
})

fastify.addHook('onResponse', async (req, reply) => {
  console.log('onResponse')
})

fastify.route({
  method: 'GET',
  path: '/hello/:name',
  handler: async (req, reply) => {
    console.log('user handler')
    return { hello: req.params.name }
  }
})

fastify.listen(3000, console.log)
