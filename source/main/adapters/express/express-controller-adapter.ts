import { type Controller } from '../../../application/ports'
import { type Request as ExpressRequest, type Response as ExpressResponse } from 'express'

export const expressControllerAdapter = (controller: Controller) => {
  return async (request: ExpressRequest, response: ExpressResponse) => {
    const resp = await controller.handle({
      headers: request.headers,
      body: request.body,
      parameters: request.params,
      authorId: request.headers.authorId as string
    })

    const { statusCode, body } = resp

    response.status(statusCode).json(body)
  }
}
