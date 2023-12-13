import { type Book } from '../../../../core/entities'
import { type CreateBookDTO } from '../../../../core/use-cases'

export interface CreateBookRepository {
  create: (data: CreateBookDTO) => Promise<Book>
}
