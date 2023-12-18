import { type Request, type Response } from '.'

export interface Controller {
  handle: (request: Request) => Promise<Response>
}
