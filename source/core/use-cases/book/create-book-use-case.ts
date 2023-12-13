import { type Book } from '../../entities'

export interface CreateBookDTO {
  isbn: string
  authorId: string
  title: string
  publishedAt: Date
  genre: string
  synopsis: string
  language: string
}

export interface CreateBookUseCase {
  create: (data: CreateBookDTO) => Promise<Book>
}
