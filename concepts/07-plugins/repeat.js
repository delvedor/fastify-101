import fp from 'fastify-plugin'

async function repeat (fastify, opts) {
  fastify.decorate('repeat', (str, num) => str.repeat(num))
}

export default fp(repeat)
