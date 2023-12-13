export interface DeleteBookDTO {
  isbn: string
  authorId: string
}

export interface DeleteBookUseCase {
  delete: (data: DeleteBookDTO) => Promise<boolean>
}
