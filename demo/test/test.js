import t from 'tap'
import Fastify from 'fastify'
import App from '../app.js'

t.test('Basic', async t => {
  const fastify = Fastify()
  await fastify.register(App)

  const response = await fastify.inject({
    method: 'GET',
    path: '/status'
  })

  t.strictEqual(response.statusCode, 200)
  t.deepEqual(response.json(), { status: 'ok' })
})

t.test('Login', async t => {
  const fastify = Fastify()
  await fastify.register(App)

  const response = await fastify.inject({
    method: 'POST',
    path: '/login',
    body: {
      username: 'delvedor',
      password: '12345678'
    }
  })

  t.strictEqual(response.statusCode, 201)
  t.type(response.json().token, 'string')
})

t.test('Validation fails', async t => {
  const fastify = Fastify()
  await fastify.register(App)

  let response = await fastify.inject({
    method: 'POST',
    path: '/login',
    body: {
      username: 'delvedor',
      password: '1234567'
    }
  })

  t.strictEqual(response.statusCode, 400)

  response = await fastify.inject({
    method: 'POST',
    path: '/login',
    body: {
      username: 'delvedor'
    }
  })

  t.strictEqual(response.statusCode, 400)

  response = await fastify.inject({
    method: 'POST',
    path: '/login',
    body: {
      password: '12345678'
    }
  })

  t.strictEqual(response.statusCode, 400)
})

t.test('Bad auth', async t => {
  const fastify = Fastify()
  await fastify.register(App)

  const response = await fastify.inject({
    method: 'POST',
    path: '/login',
    body: {
      username: 'delvedor',
      password: '123456789'
    }
  })

  t.strictEqual(response.statusCode, 401)
})

t.test('Hello', async t => {
  const fastify = Fastify()
  await fastify.register(App)

  let response = await fastify.inject({
    method: 'POST',
    path: '/login',
    body: {
      username: 'delvedor',
      password: '12345678'
    }
  })

  t.strictEqual(response.statusCode, 201)

  response = await fastify.inject({
    method: 'GET',
    path: '/hello',
    headers: {
      authorization: `Bearer ${response.json().token}`
    }
  })

  t.deepEqual(response.json(), { hello: 'delvedor' })
})
