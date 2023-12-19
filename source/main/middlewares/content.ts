import { type Request, type Response, type NextFunction } from 'express'

export const content = (request: Request, response: Response, next: NextFunction): void => {
  response.type('json')
  next()
}
