import { join } from 'desm'
import AutoLoad from 'fastify-autoload'
import Sensible from 'fastify-sensible'

export default async function app (fastify, opts) {
  fastify.register(Sensible)

  fastify.register(AutoLoad, {
    dir: join(import.meta.url, 'plugins')
  })

  fastify.register(AutoLoad, {
    dir: join(import.meta.url, 'routes')
  })
}
