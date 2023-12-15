import { type Book } from '../../../../core/entities'
import { type UpdateBookDTO } from '../../../../core/use-cases'

export interface UpdateBookRepository {
  update: (isbn: string, authorId: string, data: UpdateBookDTO) => Promise<Book>
}
