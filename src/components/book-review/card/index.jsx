import { Card, Title, ImgBook, Span, DivFlex, H3, P, DivImg, RankBook, H2 } from '../card/styles'

export const CardBooks = ({book}) => {
  return (
    <Card $scale>
              <RankBook>{`${book.rank}°`}</RankBook>

              <DivFlex>
                <Title>
                  <H2>{book.title}</H2>
                </Title>


                {book.book_image ? <ImgBook src={book.book_image} alt={book.title} />
                  :
                  <DivImg>
                    <P $noMargin>Imagem não encontrada</P>
                  </DivImg>
                }


                <div style={{ marginTop: '15px', maxWidth: '250px' }}>
                  <H3>Autor: <Span>{book.author}</Span></H3>
                  <H3>Editora: <Span>{book.publisher}</Span></H3>
                </div>
              </DivFlex>
            </Card>
  )
}