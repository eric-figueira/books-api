import { type Author, type Book } from '../../../core/entities'
import { type CreateBookDTO, type CreateBookUseCase } from '../../../core/use-cases'
import { type CreateBookRepository, type FindBookByIsbnRepository } from '../../ports/repositories'

export class CreateBook implements CreateBookUseCase {
  constructor (
    private readonly findBookByIsbnRepository: FindBookByIsbnRepository,
    private readonly createBookRepository: CreateBookRepository
  ) {}

  async create (data: CreateBookDTO): Promise<Book> {
    const { isbn } = data

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

    const exists = await this.findBookByIsbnRepository.findByIsbn({ isbn })
    if (exists !== undefined) throw new Error('Book already exists')

    const book = await this.createBookRepository.create(data)

    return book
  }
}
