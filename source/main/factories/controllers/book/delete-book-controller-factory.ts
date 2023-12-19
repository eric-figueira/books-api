import { DeleteBook } from '../../../../application/use-cases'
import { deleteBookRepository, findBookByIsbnRepository } from '../../../../infrastructure/database/mysql'
import { DeleteBookController } from '../../../../presentation/controllers'

export const DeleteBookControllerFactory = (): DeleteBookController => {
  const deleteBookUseCase = new DeleteBook(
    findBookByIsbnRepository,
    deleteBookRepository
  )

  const deleteBookController = new DeleteBookController(deleteBookUseCase)

  return deleteBookController
}
