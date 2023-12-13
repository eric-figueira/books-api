import { type Book } from '../../../../core/entities'
import { type FindBookByIsbnDTO } from '../../../../core/use-cases'

export interface FindBookByIsbnRepository {
  findByIsbn: (data: FindBookByIsbnDTO) => Promise<Book>
}
