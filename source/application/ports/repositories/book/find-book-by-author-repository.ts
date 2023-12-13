import { type Book } from '../../../../core/entities'
import { type FindBookByAuthorDTO } from '../../../../core/use-cases'

export interface FindBookByAuthorRepository {
  findByAuthor: (data: FindBookByAuthorDTO) => Promise<Book>
}
