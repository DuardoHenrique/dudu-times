import { BookDetails } from '../../components/book-review/book-details'
import { SectionBooks } from '../../components/book-review/section'

export const Book = () => {
  return (
    <SectionBooks $flexColumn>
      <BookDetails />
    </SectionBooks>
  )
}

