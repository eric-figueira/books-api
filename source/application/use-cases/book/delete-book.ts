import { type Author } from '../../../core/entities'
import { type DeleteBookDTO, type DeleteBookUseCase } from '../../../core/use-cases'
import { type FindBookByIsbnRepository, type DeleteBookRepository } from '../../ports/repositories'

export class DeleteBook implements DeleteBookUseCase {
  constructor (
    private readonly findBookByIsbn: FindBookByIsbnRepository,
    private readonly deleteBookRepository: DeleteBookRepository
  ) {}

  async delete (data: DeleteBookDTO): Promise<boolean> {
    const { isbn, authorId } = data

    /*
      TODO: Must verify if authorId is valid by calling the FindAuthorByIdRepository,
      however, for learning purposes, I am not going to make it here.
    */
    const author: Author = {
      id: '1',
      name: 'John Doe',
      email: 'john@writer.com',
      phone: '123456789',
      address: 'Wall Street, 123'
    }

    if (author === undefined) { throw new Error('Author not found') }

    const book = await this.findBookByIsbn.findByIsbn({ isbn })

    if (book === undefined) { throw new Error('Book not found') }

    return await this.deleteBookRepository.delete({ isbn, authorId })
  }
}
