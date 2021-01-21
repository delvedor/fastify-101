import S from 'fluent-json-schema'

export default async function hello (fastify, opts) {
  fastify.addHook('onRequest', fastify.authenticate)

  fastify.route({
    method: 'GET',
    path: '/hello',
    schema: {
      response: {
        200: S.object()
          .prop('hello', S.string())
      }
    },
    handler: onHello
  })

  async function onHello (req, reply) {
    return { hello: req.user.username }
  }
}
