import { type Controller, type Request, type Response } from '../../../application/ports'
import { type DeleteBookUseCase } from '../../../core/use-cases'

export class DeleteBookController implements Controller {
  constructor (
    private readonly deleteBookUseCase: DeleteBookUseCase
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      /* TODO: It'd be ideal to validate the parameters and check if the author exists. However,
      for learning purposes, I am not going to do that here
      */

      const { isbn } = request.parameters
      const { authorId } = request

      if (authorId === undefined) {
        return {
          statusCode: 400,
          body: {
            message: 'AuthorID was undefined'
          }
        }
      }

      const deleted = await this.deleteBookUseCase.delete({
        isbn,
        authorId
      })

      if (deleted) {
        return {
          statusCode: 200,
          body: {
            message: 'Book was deleted successfully'
          }
        }
      } else {
        return {
          statusCode: 304,
          body: {
            message: 'Book could not be deleted'
          }
        }
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          message: 'An error occurred when trying to delete the book'
        }
      }
    }
  }
}
