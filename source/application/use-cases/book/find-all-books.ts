import { type Book } from '../../../core/entities'
import { type FindAllBooksUseCase } from '../../../core/use-cases'
import { type FindAllBooksRepository } from '../../ports/repositories'

export class FindAllBooks implements FindAllBooksUseCase {
  constructor (
    private readonly findAllBooksRepository: FindAllBooksRepository
  ) {}

  async findAll (): Promise<Book[]> {
    return await this.findAllBooksRepository.findAll()
  }
}
