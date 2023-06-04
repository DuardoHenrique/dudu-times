import { Container } from "../../components/book-review/container"
import { SectionBooks } from "../../components/book-review/section"

import writing  from '../../assets/background-writing.jpg'

export const Books = () => {
   
    return (
        <SectionBooks background={writing} >
            <Container />
        </SectionBooks>
    )
}