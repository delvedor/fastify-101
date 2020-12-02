import S from 'fluent-schema'

export default async function login (fastify, opts) {
  const { httpErrors, jwt } = fastify

  fastify.route({
    method: 'POST',
    path: '/login',
    schema: {
      body: S.object()
        .prop('username', S.string().required())
        .prop('password', S.string().minLength(8).required())
        .additionalProperties(false)
    },
    handler: onLogin
  })

  async function onLogin (req, reply) {
    const { username, password } = req.body
    if (username !== 'delvedor' || password !== '12345678') {
      throw httpErrors.unauthorized('Bad username or password')
    }
    const token = jwt.sign({ username })
    reply.code(201)
    return { token }
  }
}
