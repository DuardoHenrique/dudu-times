import { useEffect, useState } from "react"
import { getFilms } from "../../../services/films"
import { P, Title } from "../../main/cards/styles-cards"

export const CardFilms = ({subject}) => {
  const [films, setFilms] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilms(subject)
      const films = await data.results
      setFilms(films)
      console.log('Films', data.results)
    }
    fetchData()
  }, [subject])

  return (
    <div>

      {!films && <P>Films não encontrados</P>}
      {films && films.map((film, index) => {
        return <div style={{ marginBottom: '50px', textAlign: 'center' }} key={index} >
          <a
            key={index}
            href={film.link.url}
            target="_blank"
            rel="noreferrer"
          >

            <hr />
            <Title>{film.display_title}</Title>
            <P>Sinopse: {film.link.suggested_link_text}</P>
            {film.multimedia ? <img src={film.multimedia.src} alt={film.display_title} />
              :
              <P>Imagem não encontrada</P>
            }
            <P>Resumo: {film.summary_short}</P>
            <P>Data: {film.opening_date}</P>
            <P>Byline: {film.byline}</P>



            <hr />
          </a>
        </div>
      })}
    </div>
  )
}