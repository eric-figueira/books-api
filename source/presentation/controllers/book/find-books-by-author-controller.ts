import { type Request, type Response, type Controller } from '../../../application/ports'
import { type FindBooksByAuthorUseCase } from '../../../core/use-cases'

export class FindBooksByAuthorController implements Controller {
  constructor (
    private readonly findBooksByAuthorUseCase: FindBooksByAuthorUseCase
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      /* TODO: It'd be ideal to validate the parameters. However,
      for learning purposes, I am not going to do that here
      */

      const { authorId } = request.parameters

      const books = await this.findBooksByAuthorUseCase.findByAuthor({
        authorId
      })

      return {
        statusCode: 201,
        body: {
          books
        }
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          message: 'An error occurred when trying to get the books'
        }
      }
    }
  }
}
