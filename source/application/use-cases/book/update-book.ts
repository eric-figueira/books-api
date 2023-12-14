import { type Author, type Book } from '../../../core/entities'
import { type UpdateBookDTO, type UpdateBookUseCase } from '../../../core/use-cases'
import { type FindBookByIsbnRepository, type UpdateBookRepository } from '../../ports/repositories'

export class UpdateBook implements UpdateBookUseCase {
  constructor (
    private readonly findBookByIsbn: FindBookByIsbnRepository,
    private readonly updateBookRepository: UpdateBookRepository
  ) {}

  async update (isbn: string, authorId: string, data: UpdateBookDTO): Promise<Book> {
    /*
      TODO: Must verify if authorId is valid by calling the FindAuthorByIdRepository,
      however, for learning purposes, I am not going to make it here.
    */
    const author: Author = {
      id: '1',
      name: 'John Doe',
      email: 'john@writer.com',
      phone: '123456789',
      address: 'Wall Street, 123'
    }

    if (author === undefined) { throw new Error('Author not found') }

    const bookExists = await this.findBookByIsbn.findByIsbn({ isbn })

    if (bookExists === undefined) { throw new Error('Book not found') }

    const book = await this.updateBookRepository.update(data)

    return book
  }
}
