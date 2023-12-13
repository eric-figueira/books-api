import { type Book } from '../../entities'

export interface FindBookByIsbnDTO {
  isbn: string
}

export interface FindBookByIsbnUseCase {
  findByIsbn: (data: FindBookByIsbnDTO) => Promise<Book>
}
