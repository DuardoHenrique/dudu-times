import { Link } from "react-router-dom"
import { NavBar } from "./navbar"
import { H1, SectionHeader } from "./styles"

export const Header = () => {

  return (
    <SectionHeader>
      <Link to={'/'}>
        <H1>NewYorkDu</H1>
      </Link>
      <NavBar />
    </SectionHeader>
  )
}