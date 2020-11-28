import Fastify from 'fastify'

const fastify = Fastify()

fastify.decorate('repeat', (str, num) => str.repeat(num))

fastify.route({
  method: 'GET',
  path: '/hello/:name',
  handler: async function (req, reply) {
    // return { hello: this.repeat(req.params.name, 2) }
    return { hello: fastify.repeat(req.params.name, 2) }
  }
})

fastify.listen(3000, console.log)
