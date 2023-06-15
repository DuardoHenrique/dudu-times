import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getBooks } from "../../../services/books"
import { CardBooks } from "../card"
import { ContainerBooks } from './styles'
import { H2 } from "../card/styles"

export const Container = () => {
  const [booksList, setBooksList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBooks()
      const books = await data.results.books
      setBooksList(books)
    }
    fetchData()
  }, [])

  return (
    <ContainerBooks>
      {!booksList[0] && <H2>Buscando Livros</H2>}

      {booksList[0] && booksList.map((book, index) => {
        return (
          <Link to={`/book/${index+1}`} key={index} style={{display: 'flex', justifyContent: 'center'   }}>
            <CardBooks book={book} />
          </Link>
        )
      })}
    </ContainerBooks>
  )
}
