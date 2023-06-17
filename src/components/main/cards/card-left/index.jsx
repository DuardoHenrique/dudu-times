import { useEffect, useState } from "react"

import { ConatinerCardLeft } from "./styles"
import { Card } from "../card"
import { getMostPopular } from "../../../../services/most-popular"
import { TbPointFilled } from 'react-icons/tb'
import { A, DivImgTitle, DivSource, I, P, Title } from "../styles-cards"

export const CardLeft = () => {
  const [mostPopularList, setMostPopular] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMostPopular()
      const mostPopular = await data.results
      console.log('MostPopular', data.results);
      setMostPopular(mostPopular)
    }
    fetchData()
  }, [])

  return (
    <ConatinerCardLeft>
      {!mostPopularList && <h1>Populares não encontrados</h1>}

      {mostPopularList && mostPopularList.slice(0, 8).map((popular, index) => {
        return <A key={index} href={popular.url} target="_blank" rel="noreferrer" style={{ width: '100%' }}>

          <Card>

            <DivImgTitle>
              <Title>{popular.title}</Title>
              {popular.media[0]['media-metadata'][1].url && <img src={popular.media[0]['media-metadata'][1].url} alt={popular.type} />}
            </DivImgTitle>


            <P><I><TbPointFilled /></I>{popular.abstract}</P>
            {popular.media[0].caption && <P><I><TbPointFilled /></I>{popular.media[0].caption}</P>}

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