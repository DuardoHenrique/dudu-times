import { useEffect, useState } from "react"

import { ConatinerCardLeft } from "./styles"
import { Card } from "../card"
import { getMostPopular } from "../../../../services/most-popular"
import { TbPointFilled } from 'react-icons/tb'
import { A, DivImgTitle, DivSource, I, P, Title } from "../styles-cards"
import { H2 } from "../../../book-review/card/styles"

export const CardLeft = () => {
  const [mostPopularList, setMostPopular] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMostPopular()
      const mostPopular = await data.results
      setMostPopular(mostPopular)
    }
    fetchData()
  }, [])

  return (
    <ConatinerCardLeft>
      {!mostPopularList && <H2>Populares não encontrados</H2>}

      {mostPopularList && mostPopularList.slice(0, 8).map((popular, index) => {
        return <A key={index} href={popular.url} target="_blank" rel="noreferrer" >

          <Card>

            <DivImgTitle>
              <Title>{popular.title}</Title>
              {popular.media[0] && <img src={popular.media[0]['media-metadata'][1].url} alt={popular.type} />}
            </DivImgTitle>


            {popular.abstract
              ?
              <P><I><TbPointFilled /></I>{popular.abstract}</P>
              :
              <P><I><TbPointFilled /></I>Resumo não encontrado.</P>
            }

            {popular.media[0]
              ?
              <P><I><TbPointFilled /></I>{popular.media[0].caption}</P>
              :
              <P><I><TbPointFilled /></I>Resumo não encontrado.</P>
            }

            <DivSource>
              <div>
                <P>{popular.byline}</P>
                <P>Publicado: {popular.published_date}</P>
              </div>

              <P>Fonte: {popular.source}</P>
            </DivSource>

          </Card>
        </A>
      })}
    </ConatinerCardLeft>
  )
}