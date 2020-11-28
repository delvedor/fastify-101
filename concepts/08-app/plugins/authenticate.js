import fp from 'fastify-plugin'

async function authenticate (fastify, opts) {
  fastify.decorate('authenticate', onAuthenticate)

  async function onAuthenticate (req, reply) {
    await req.jwtVerify()
  }
}

export default fp(authenticate)
