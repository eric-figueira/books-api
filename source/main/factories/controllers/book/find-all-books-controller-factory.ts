import { FindAllBooks } from '../../../../application/use-cases'
import { findAllBooksRepository } from '../../../../infrastructure/database/mysql'
import { FindAllBooksController } from '../../../../presentation/controllers'

export const findAllBooksControllerFactory = (): FindAllBooksController => {
  const findAllBooksUseCase = new FindAllBooks(
    findAllBooksRepository
  )

  const findAllBooksController = new FindAllBooksController(findAllBooksUseCase)

  return findAllBooksController
}
