import { Link } from "react-router-dom"
import { Ul, Li } from "./styles"

export const NavBar = () => {
  return (
    <Ul>

      <Li>
        <Link to={'/'}>Principal</Link>
      </Li>

      <Li>
        <Link to={'/books'}>Livros</Link>
      </Li>

      <Li>
        <Link>Filmes</Link>
      </Li>
      
    </Ul>
  )
}