import { type Controller, type Request, type Response } from '../../../application/ports'
import { type CreateBookUseCase } from '../../../core/use-cases'

export class CreateBookController implements Controller {
  constructor (
    private readonly createBookUseCase: CreateBookUseCase
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      /* TODO: It'd be ideal to validate the parameters. However, for learning
      purposes, I am not going to do that here
      */

      const { isbn, title, publishedAt, genre, synopsis, language } = request.body
      const { authorId } = request

      if (authorId === undefined) {
        return {
          statusCode: 400,
          body: {
            message: 'AuthorID was undefined'
          }
        }
      }

      const book = await this.createBookUseCase.create({
        isbn,
        authorId,
        title,
        publishedAt,
        genre,
        synopsis,
        language
      })

      return {
        statusCode: 201,
        body: {
          message: 'Book created successfully',
          bookId: book.id
        }
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          message: 'An error occurred when trying to create the book'
        }
      }
    }
  }
}
