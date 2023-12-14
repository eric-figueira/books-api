import { type Book } from '../../entities'

export interface FindBooksByAuthorDTO {
  authorId: string
}

export interface FindBooksByAuthorUseCase {
  findByAuthor: (data: FindBooksByAuthorDTO) => Promise<Book[]>
}
