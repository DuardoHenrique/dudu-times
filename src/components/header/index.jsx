import { useContext } from "react"
import { IconTogglerTheme } from "./icon-toggler-theme"
import { NavBar } from "./navbar"
import { SectionHeader } from "./styles"
import { ThemeContext } from "../../context/theme-context"

export const Header = () => {
    const {theme}  = useContext(ThemeContext)

    return (
        <SectionHeader background={theme.background}>
            <IconTogglerTheme />
            <NavBar />
        </SectionHeader>
    )
}