/* eslint-disable @typescript-eslint/no-misused-promises */
import { type Router } from 'express'
import {
  createBookControllerFactory,
  deleteBookControllerFactory,
  findAllBooksControllerFactory,
  findBookByIsbnControllerFactory,
  findBooksByAuthorControllerFactory,
  updateBookControllerFactory
} from '../factories/controllers'
import { expressControllerAdapter } from '../adapters/express'

export const setupBookRoutes = (router: Router): void => {
  router.get(
    '/books',
    expressControllerAdapter(findAllBooksControllerFactory())
  )

  router.get(
    '/books:isbn',
    expressControllerAdapter(findBookByIsbnControllerFactory())
  )

  router.get(
    '/books:authorId',
    expressControllerAdapter(findBooksByAuthorControllerFactory())
  )

  router.post(
    '/books',
    expressControllerAdapter(createBookControllerFactory())
  )

  router.delete(
    '/books:isbn',
    expressControllerAdapter(deleteBookControllerFactory())
  )

  router.patch(
    '/books:isbn',
    expressControllerAdapter(updateBookControllerFactory())
  )
}
