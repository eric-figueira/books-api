import { type Express } from 'express'
import { content, cors, json } from '../middlewares'

export default (app: Express): void => {
  app.use(json)
  app.use(cors)
  app.use(content)
}
