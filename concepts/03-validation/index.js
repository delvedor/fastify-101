import Fastify from 'fastify'
import F from 'fluent-schema'

const fastify = Fastify()

fastify.post('/json', {
  schema: {
    body: {
      type: 'object',
      properties: {
        hello: { type: 'string' }
      },
      additionalProperties: false,
      required: ['hello']
    }
  }
}, async (req, reply) => {
  return req.body
})

fastify.post('/fluent', {
  schema: {
    body: F.object()
      .additionalProperties(false)
      .prop('hello', F.string().required())
  }
}, async (req, reply) => {
  return req.body
})

fastify.route({
  method: 'GET',
  path: '/double/:number',
  schema: {
    params: F.object()
      .prop('number', F.number().required())
  },
  handler: async (req, reply) => {
    return req.params.number * 2
  }
})

fastify.listen(3000, console.log)
