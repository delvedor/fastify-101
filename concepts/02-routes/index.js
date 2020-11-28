import Fastify from 'fastify'

const fastify = Fastify()

fastify.get('/', async (req, reply) => {
  return { hello: 'world' }
})

fastify.post('/', async (req, reply) => {
  return req.body
})

fastify.route({
  method: 'GET',
  path: '/hello/:name',
  handler: async (req, reply) => {
    return { hello: req.params.name }
  }
})

fastify.listen(3000, console.log)
