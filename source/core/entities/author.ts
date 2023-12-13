import { type Book } from '.'

export interface Author {
  id: string
  name: string
  address: string
  email: string
  phone: string
  books?: Book[]
}
