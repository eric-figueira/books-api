import { type Book } from '../../../../core/entities'
import { type FindBooksByAuthorDTO } from '../../../../core/use-cases'

export interface FindBooksByAuthorRepository {
  findByAuthor: (data: FindBooksByAuthorDTO) => Promise<Book[]>
}
