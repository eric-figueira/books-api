import { type Controller, type Request, type Response } from '../../../application/ports'
import { type FindBookByIsbnUseCase } from '../../../core/use-cases'

export class FindBookByIsbnController implements Controller {
  constructor (
    private readonly findBookByIsbnUseCase: FindBookByIsbnUseCase
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      /* TODO: It'd be ideal to validate the parameters. However,
      for learning purposes, I am not going to do that here
      */

      const { isbn } = request.parameters

      const book = await this.findBookByIsbnUseCase.findByIsbn({
        isbn
      })

      return {
        statusCode: 201,
        body: {
          book
        }
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          message: 'An error occurred when trying to get the book'
        }
      }
    }
  }
}
