import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import auth from './auth'
import stores from './stores'

const app = new Hono().basePath('/api')

export const runtime = 'nodejs'

const routes = app.route('/stores', stores).route('/auth', auth)

export const GET = handle(app)
export const POST = handle(app)
export const DELETE = handle(app)

export type AppType = typeof routes