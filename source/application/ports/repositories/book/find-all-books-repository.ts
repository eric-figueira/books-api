import { type Book } from '../../../../core/entities'

export interface FindAllBooksRepository {
  findAll: () => Promise<Book[]>
}
