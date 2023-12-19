import { FindBookByIsbn } from '../../../../application/use-cases'
import { findBookByIsbnRepository } from '../../../../infrastructure/database/mysql'
import { FindBookByIsbnController } from '../../../../presentation/controllers/book/find-book-by-isbn-controller'

export const findBookByIsbnControllerFactory = (): FindBookByIsbnController => {
  const findBookByIsbnUseCase = new FindBookByIsbn(
    findBookByIsbnRepository
  )

  const findBookByIsbnController = new FindBookByIsbnController(findBookByIsbnUseCase)

  return findBookByIsbnController
}
