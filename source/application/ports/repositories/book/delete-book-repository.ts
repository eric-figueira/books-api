import { type DeleteBookDTO } from '../../../../core/use-cases'

export interface DeleteBookRepository {
  delete: (data: DeleteBookDTO) => Promise<boolean>
}
