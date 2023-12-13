import { type Book } from '../../entities'

export interface UpdateBookDTO {
  title?: string
  publishedAt?: Date
  genre?: string
  synopsis?: string
  language?: string
}

export interface UpdateBookUseCase {
  update: (isbn: string, authorId: string, data: UpdateBookDTO) => Promise<Book>
}
