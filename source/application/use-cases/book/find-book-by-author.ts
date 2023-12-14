import { type Book } from '../../../core/entities'
import { type FindBooksByAuthorDTO, type FindBooksByAuthorUseCase } from '../../../core/use-cases'
import { type FindBooksByAuthorRepository } from '../../ports/repositories'

export class FindBooksByAuthor implements FindBooksByAuthorUseCase {
  constructor (
    private readonly findBooksByAuthorRepository: FindBooksByAuthorRepository
  ) {}

  async findByAuthor (data: FindBooksByAuthorDTO): Promise<Book[]> {
    const { authorId } = data

    return await this.findBooksByAuthorRepository.findByAuthor({ authorId })
  }
}
