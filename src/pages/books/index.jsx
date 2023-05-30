import { Container } from "../../components/book-review/container"
import { SectionBooks } from "../../components/book-review/section"
import backgroundWriting from "../../assets/background-writing.jpg"
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"


export const Books = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <SectionBooks background={theme.background} >
            <Container />
        </SectionBooks>
    )
}