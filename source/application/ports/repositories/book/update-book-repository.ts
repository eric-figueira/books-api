import { type Book } from '../../../../core/entities'
import { type UpdateBookDTO } from '../../../../core/use-cases'

export interface UpdateBookRepository {
  update: (data: UpdateBookDTO) => Promise<Book>
}
