import { type Book } from '../../entities'

export interface FindAllBooksUseCase {
  findAll: () => Promise<Book[]>
}
