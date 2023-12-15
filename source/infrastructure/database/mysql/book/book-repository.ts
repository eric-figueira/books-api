import {
  type CreateBookRepository,
  type DeleteBookRepository,
  type FindAllBooksRepository,
  type FindBookByIsbnRepository,
  type FindBooksByAuthorRepository,
  type UpdateBookRepository
} from '../../../../application/ports/repositories'
import { type Book } from '../../../../core/entities'
import {
  type CreateBookDTO,
  type DeleteBookDTO,
  type FindBookByIsbnDTO,
  type FindBooksByAuthorDTO,
  type UpdateBookDTO
} from '../../../../core/use-cases'

import { PrismaClient } from '@prisma/client'

export class BookRepository
implements
    CreateBookRepository,
    DeleteBookRepository,
    UpdateBookRepository,
    FindAllBooksRepository,
    FindBookByIsbnRepository,
    FindBooksByAuthorRepository {
  private readonly prisma = new PrismaClient()

  async create (data: CreateBookDTO): Promise<Book> {
    const book = (await this.prisma.book.create({ data })) as Book
    return book
  }

  async delete (data: DeleteBookDTO): Promise<boolean> {
    const { isbn } = data
    if (await this.prisma.book.delete({ where: { isbn } }) !== undefined) { return true }

    return false
  }

  async update (isbn: string, authorId: string, data: UpdateBookDTO): Promise<Book> {
    const book = (await this.prisma.book.update({ where: { isbn }, data })) as Book
    return book
  }

  async findAll (): Promise<Book[]> {
    const books = (await this.prisma.book.findMany({ include: { author: true } })) as Book[]
    return books
  }

  async findByIsbn (data: FindBookByIsbnDTO): Promise<Book> {
    const { isbn } = data
    const book = (await this.prisma.book.findUnique({
      where: { isbn },
      include: { author: true }
    })) as Book
    return book
  }

  async findByAuthor (data: FindBooksByAuthorDTO): Promise<Book[]> {
    const { authorId } = data
    const books = (await this.prisma.book.findMany({
      where: { authorId },
      include: { author: true }
    })) as Book[]
    return books
  }
}
