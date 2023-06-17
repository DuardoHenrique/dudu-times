import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Books } from './books'
import { Header } from '../components/header'
import { Book } from './book'
import { Error } from '../components/error'
import { Main } from './main'
import { Films } from './films'

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/book/:id" element={<Book />} />
        <Route exact path="/films" element={<Films />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>

  )
}