import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Books } from './books'
import { Header } from '../components/header'

export const AppRoutes = () => {
    return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Books />} />
                </Routes>
            </BrowserRouter>    
    )
}