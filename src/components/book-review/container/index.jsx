import { useContext, useEffect, useState } from "react"
import { getBooks } from "../../../services/books"

import { Card, Title, ImgBook, P, Span } from "../card/styles"
import { ContainerBooks } from "./styles"
import { ThemeContext } from "../../../context/theme-context"

export const Container = () => {
    const [booksList, setBooksList] = useState()
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const fetchData = async () => {
            const json = await getBooks()
            const books = await json.results.books
            setBooksList(books)
            console.log('List books', books)
        }
        fetchData()
    }, [])

    return (
        <ContainerBooks>
            {booksList && booksList.map((book, index) => {
                console.log('Book in map' + index, book)
                return (
                    <Card background={theme.backgroundCard} key={index}>
                        <Title>
                            <h2>{book.title}</h2>
                        </Title>
                        <a style={{cursor: 'pointer'}}>
                            <ImgBook src={book.book_image} alt='livro' />
                        </a>
                        <div style={{ marginTop: '10px' }}>
                            <P>Autor: <Span>{book.author}</Span></P>
                            <P>Editora: <Span>{book.publisher}</Span></P>
                        </div>
                    </Card>
                )
            })}
        </ContainerBooks>
    )
}