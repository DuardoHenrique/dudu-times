import { createContext, useState } from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { GiSun } from 'react-icons/gi'

export const themes = {
    light: {
        colorFontText: '',
        colorFontTitle: '',
        icon: <BsFillMoonFill />,
        colorIcon: 'rgba(66, 24, 103, 1)',
        colorIconShadow: 'rgba(66, 24, 103, 0.3)',
        background: '#fff',
        backgroundCard: '#dbe8f1',
    },
    dark: {
        colorFontText: '',
        colorFontTitle: '',
        icon: <GiSun />,
        colorIcon: 'rgba(211, 240, 21, 1)',
        colorIconShadow: 'rgba(211, 240, 21, 0.3)',
        background: '#000',
        backgroundCard: '#292217',
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}