import { type Author } from '.'

export interface Book {
  id: string
  isbn: string
  authorId: string
  title: string
  publishedAt: Date
  genre: string
  synopsis: string
  language: string
  author?: Author
}
