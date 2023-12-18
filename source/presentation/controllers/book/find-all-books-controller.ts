import { type Controller, type Request, type Response } from '../../../application/ports'
import { type FindAllBooksUseCase } from '../../../core/use-cases'

export class FindAllBooksController implements Controller {
  constructor (
    private readonly findAllBooksUseCase: FindAllBooksUseCase
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const books = await this.findAllBooksUseCase.findAll()

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
          message: 'An error occurred when trying to create the book'
        }
      }
    }
  }
}
