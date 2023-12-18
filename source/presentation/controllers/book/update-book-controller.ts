import { type Controller, type Request, type Response } from '../../../application/ports'
import { type UpdateBookUseCase } from '../../../core/use-cases'

export class UpdateBookController implements Controller {
  constructor (
    private readonly updateBookUseCase: UpdateBookUseCase
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      /* TODO: It'd be ideal to validate the parameters. However,
      for learning purposes, I am not going to do that here
      */

      const { isbn } = request.parameters
      const { title, publishedAt, genre, synopsis, language } = request.body
      const { authorId } = request

      if (authorId === undefined) {
        return {
          statusCode: 400,
          body: {
            message: 'AuthorID was undefined'
          }
        }
      }

      const book = await this.updateBookUseCase.update(
        isbn as string,
        authorId,
        {
          title,
          publishedAt,
          genre,
          synopsis,
          language
        }
      )

      return {
        statusCode: 201,
        body: {
          message: 'Book updated successfully',
          bookId: book.id
        }
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          message: 'An error occurred when trying to update the book'
        }
      }
    }
  }
}
