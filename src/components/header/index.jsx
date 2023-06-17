import { Link } from "react-router-dom"
import { NavBar } from "./navbar"
import { SectionHeader } from "./styles"

export const Header = () => {

  return (
    <SectionHeader>
      <Link to={'/'}>
        <h1>NewYorkDu</h1>
      </Link>
      <NavBar />
    </SectionHeader>
  )
}