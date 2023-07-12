import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Books } from './books'
import { Header } from '../components/header'
import { Book } from './book'
import { Error } from '../components/error'
import { Main } from './main'
import { Films } from './films'
import { CardCenter } from '../components/main/cards/card-center'

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/search" element={<CardCenter />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/book/:id" element={<Book />} />
        <Route exact path="/films" element={<Films />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>

  )
}