import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { getBooks } from "../../../services/books"
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DivLink, DivDetails } from './styles'
import { A, Card, DivFlex, DivImg, H2, H3, I, ImgBook, P, RankBook, Span, Title } from "../card/styles"


export const BookDetails = () => {
  const [booksList, setBooksList] = useState()

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const json = await getBooks()
      const books = await json.results.books
      setBooksList(books)
    }
    fetchData()
  }, [])

  return (
    <>
        <Link to={'/books'} style={{ alignSelf: 'start', marginBottom: '20px', marginLeft: '50px' }}>
          <DivLink>
            Voltar
          </DivLink>
        </Link>

      {!booksList && <H2 $colorWhite>Buscando Livro</H2>}

      {booksList &&

        <Card >
          <RankBook>{`${booksList[id].rank}°`}</RankBook>

          <DivFlex   >
            <Title>
              <H2>{booksList[id].title}</H2>
            </Title>


            {booksList[id].book_image ? <ImgBook src={booksList[id].book_image} alt={booksList[id].title} />
              :
              <DivImg>
                <P>Imagem não encontrada</P>
              </DivImg>}


            <div style={{ marginTop: '10px' }}>
              <H3>Autor: <Span>{booksList[id].author}</Span></H3>
              <H3>Editora: <Span>{booksList[id].publisher}</Span></H3>
            </div>
          </DivFlex>

          <DivDetails>
            <div style={{ marginBottom: '30px' }}>
              <H2>Descrição:</H2>
              <P>{booksList[id].description}</P>
            </div>

            <H2>Compra:</H2>
            <div style={{ marginBottom: '10px', marginTop: '10px' }}>
              <A href={booksList[id].buy_links[0].url} target="_blank" rel="noreferrer">
                {booksList[id].buy_links[0].name}
                <I><FaExternalLinkAlt /></I>
              </A>
            </div>

            <div style={{marginBottom: '10px'}}>
              <A href={booksList[id].buy_links[1].url} target="_blank" rel="noreferrer" >
                {booksList[id].buy_links[1].name}
                <I><FaExternalLinkAlt /></I>
              </A>
            </div>

            <div>
              <A href={booksList[id].buy_links[2].url} target="_blank" rel="noreferrer" >
                {booksList[id].buy_links[2].name}
                <I><FaExternalLinkAlt /></I>
              </A>
            </div>

          </DivDetails>
        </Card>
      }

    </>
  )
}