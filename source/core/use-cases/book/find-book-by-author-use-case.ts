import { type Book } from '../../entities'

export interface FindBookByAuthorDTO {
  authorId: string
}

export interface FindBookByAuthorUseCase {
  findByAuthor: (data: FindBookByAuthorDTO) => Promise<Book>
}
