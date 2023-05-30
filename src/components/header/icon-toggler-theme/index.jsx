import { useContext } from "react"
import { ThemeContext, themes } from "../../../context/theme-context"
import { ButtonTogglerTheme, I } from "./styles"

export const IconTogglerTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const inEffect = `
    @keyframes blink {
      from { box-shadow: 0 0 15px ${theme.colorIconShadow}}
      to {box-shadow: 0 0 15px ${theme.colorIcon  } ;}
    }
  `;

    return (
        <div onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
            <style children={inEffect} />
            <ButtonTogglerTheme blink={'blink'} >
              
                <I color={theme.colorIcon} >
                    {theme.icon}
                </I>
            </ButtonTogglerTheme>
        </div>
    )
}