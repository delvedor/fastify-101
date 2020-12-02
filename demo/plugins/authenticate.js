import fp from 'fastify-plugin'
import Jwt from 'fastify-jwt'

async function authenticate (fastify, opts) {
  fastify.register(Jwt, { secret: 'supersecret' })

  fastify.decorate('authenticate', onAuthenticate)

  async function onAuthenticate (req, reply) {
    await req.jwtVerify()
  }
}

export default fp(authenticate)
