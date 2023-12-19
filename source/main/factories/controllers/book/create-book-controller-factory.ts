import { CreateBook } from '../../../../application/use-cases'
import { createBookRepository, findBookByIsbnRepository } from '../../../../infrastructure/database/mysql'
import { CreateBookController } from '../../../../presentation/controllers'

export const CreateBookControllerFactory = (): CreateBookController => {
  const createBookUseCase = new CreateBook(
    findBookByIsbnRepository,
    createBookRepository
  )

  const createBookController = new CreateBookController(createBookUseCase)

  return createBookController
}
