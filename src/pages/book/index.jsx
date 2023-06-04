import { BookDetails } from '../../components/book-review/book-details'
import { SectionBooks } from '../../components/book-review/section'
import writing from '../../assets/background-writing.jpg'

export const Book = () => {
  return (
    <SectionBooks background={writing} $flexColumn>
      <BookDetails />
    </SectionBooks>
  )
}

