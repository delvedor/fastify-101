export default async function MyRoutes (fastify, opts) {
  const { repeat } = fastify
  fastify.get('/hello/:name', async (req, reply) => {
    return { hello: repeat(req.params.name, 2) }
  })
}
