import { FindBooksByAuthor } from '../../../../application/use-cases'
import { findBooksByAuthorRepository } from '../../../../infrastructure/database/mysql'
import { FindBooksByAuthorController } from '../../../../presentation/controllers'

export const findBooksByAuthorControllerFactory = (): FindBooksByAuthorController => {
  const findBooksByAuthorUseCase = new FindBooksByAuthor(
    findBooksByAuthorRepository
  )

  const findBooksByAuthorController = new FindBooksByAuthorController(findBooksByAuthorUseCase)

  return findBooksByAuthorController
}
