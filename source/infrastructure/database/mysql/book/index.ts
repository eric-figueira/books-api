import { type DeleteBookRepository, type CreateBookRepository, type UpdateBookRepository, type FindAllBooksRepository, type FindBooksByAuthorRepository, type FindBookByIsbnRepository } from '../../../../application/ports'
import { BookRepository } from './book-repository'

const bookMySqlRepository = new BookRepository()

const createBookRepository: CreateBookRepository = bookMySqlRepository
const deleteBookRepository: DeleteBookRepository = bookMySqlRepository
const updateBookRepository: UpdateBookRepository = bookMySqlRepository
const findAllBooksRepository: FindAllBooksRepository = bookMySqlRepository
const findBooksByAuthorRepository: FindBooksByAuthorRepository = bookMySqlRepository
const findBookByIsbnRepository: FindBookByIsbnRepository = bookMySqlRepository

export {
  createBookRepository,
  deleteBookRepository,
  updateBookRepository,
  findAllBooksRepository,
  findBooksByAuthorRepository,
  findBookByIsbnRepository
}
