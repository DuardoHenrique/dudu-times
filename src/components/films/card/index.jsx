import { useEffect, useState } from "react"

import { getFilms } from "../../../services/films"
import { P, Title } from "../../main/cards/styles-cards"
import { H2 } from "../../book-review/card/styles"
import { DivCardFilms, DivData, DivImgFilms, DivPresentation, DivSourceFilms } from "./styles"

export const CardFilms = ({ subject }) => {
  const [films, setFilms] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilms(subject)
      const films = await data.results
      setFilms(films)
    }
    fetchData()
  }, [subject])

  return (
    <>

      {!films && <H2>Buscando filmes</H2>}
      {films && films.map((film, index) => {
        return <DivCardFilms key={index} >
          <a
            key={index}
            href={film.link.url}
            target="_blank"
            rel="noreferrer"
          >

            <Title>{film.display_title}</Title>

            <DivData>
              {film.multimedia ? <img src={film.multimedia.src} alt={film.display_title} />
                :
                <DivImgFilms>
                  <P>Imagem não encontrada</P>
                </DivImgFilms>
              }

              <DivPresentation>
                <P>{film.link.suggested_link_text}</P>
                <hr></hr>
                <P>{film.summary_short}</P>
              </DivPresentation>
            </DivData>

            <DivSourceFilms>
              <P>{film.opening_date}</P>
              <P>Assinatura: {film.byline}</P>
            </DivSourceFilms>

          </a>
        </DivCardFilms>
      })}
    </>
  )
}