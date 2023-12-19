import { type Router } from 'express'
import {
  createBookControllerFactory,
  deleteBookControllerFactory,
  findAllBooksControllerFactory,
  findBookByIsbnControllerFactory,
  findBooksByAuthorControllerFactory,
  updateBookControllerFactory
} from '../factories/controllers'

export const setupBookRoutes = (router: Router): void => {
  router.get(
    '/books',
    findAllBooksControllerFactory()
  )

  router.get(
    '/books:isbn',
    findBookByIsbnControllerFactory()
  )

  router.get(
    '/books:authorId',
    findBooksByAuthorControllerFactory()
  )

  router.post(
    '/books',
    createBookControllerFactory()
  )

  router.delete(
    '/books:isbn',
    deleteBookControllerFactory()
  )

  router.patch(
    '/books:isbn',
    updateBookControllerFactory()
  )
}
