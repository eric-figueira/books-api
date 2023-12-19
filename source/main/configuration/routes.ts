import { type Express, Router } from 'express'
import { setupBookRoutes } from '../routes'

export default (app: Express): void => {
  const router = Router()

  router.use('/')

  setupBookRoutes(router)
}
