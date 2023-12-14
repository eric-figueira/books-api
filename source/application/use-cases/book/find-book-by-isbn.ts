import { type Book } from '../../../core/entities'
import { type FindBookByIsbnDTO, type FindBookByIsbnUseCase } from '../../../core/use-cases'
import { type FindBookByIsbnRepository } from '../../ports/repositories'

export class FindBookByIsbn implements FindBookByIsbnUseCase {
  constructor (
    private readonly findBookByIsbnRepository: FindBookByIsbnRepository
  ) {}

  async findByIsbn (data: FindBookByIsbnDTO): Promise<Book> {
    const { isbn } = data

    const book = await this.findBookByIsbnRepository.findByIsbn({ isbn })

    if (book === undefined) { throw new Error('Book not found') }

    return book
  }
}
