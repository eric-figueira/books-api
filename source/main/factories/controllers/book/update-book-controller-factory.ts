import { UpdateBook } from '../../../../application/use-cases'
import { findBookByIsbnRepository, updateBookRepository } from '../../../../infrastructure/database/mysql'
import { UpdateBookController } from '../../../../presentation/controllers'

export const updateBookControllerFactory = (): UpdateBookController => {
  const updateBookUseCase = new UpdateBook(
    findBookByIsbnRepository,
    updateBookRepository
  )

  const updateBookController = new UpdateBookController(updateBookUseCase)

  return updateBookController
}
