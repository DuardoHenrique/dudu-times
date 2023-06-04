import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getBooks } from "../../../services/books"
import { ContainerBooks, Card, Title, ImgBook, Span, H2, DivFlex, H3, P, DivImg, RankBook } from "./styles"

export const Container = () => {
  const [booksList, setBooksList] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const json = await getBooks()
      const books = await json.results.books
      setBooksList(books)
    }
    fetchData()
  }, [])

  return (
    <ContainerBooks>
      {!booksList && <H2 $colorWhite >Buscando Livros</H2>}

      {booksList && booksList.map((book, index) => {
        return (
          <Link to={`/book/${index}`} key={index}>
            <Card >
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
          </Link>
        )
      })}
    </ContainerBooks>
  )
}
