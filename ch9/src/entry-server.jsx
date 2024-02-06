import ReactDOMServer from 'react-dom/server'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server'
import { App } from './App.jsx'
import { routes } from './routes.jsx'
import { createFetchRequest } from './request.js'

const handler = createStaticHandler(routes)

export async function render(req) {
  const fetchRequest = createFetchRequest(req)
  const context = await handler.query(fetchRequest)
  const router = createStaticRouter(handler.dataRoutes, context)
  return ReactDOMServer.renderToString(
    <App>
      <StaticRouterProvider router={router} context={context} />
    </App>,
  )
}
