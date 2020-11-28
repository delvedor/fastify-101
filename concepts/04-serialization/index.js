import Fastify from 'fastify'
import F from 'fluent-schema'

const fastify = Fastify()

fastify.route({
  method: 'GET',
  path: '/hello/:name',
  schema: {
    response: {
      200: F.object()
        .prop('hello', F.string())
    }
  },
  handler: async (req, reply) => {
    return { hello: req.params.name }
  }
})

fastify.listen(3000, console.log)
