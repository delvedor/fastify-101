export default async function hello (fastify, opts) {
  fastify.route({
    method: 'GET',
    path: '/status',
    handler: onStatus
  })

  async function onStatus (req, reply) {
    return { status: 'ok' }
  }
}
