import { Link } from "react-router-dom"
import { Ul, Li } from "./styles"

export const NavBar = () => {
  return (
    <Ul>

      <Li>
        <Link to={'/'}>Home</Link>
      </Li>

      <Li>
        <Link to={'/books'}>Books</Link>
      </Li>

      <Li>
        <Link>Nav2</Link>
      </Li>

      <Li>
        <Link>Nav3</Link>
      </Li>
      
    </Ul>
  )
}