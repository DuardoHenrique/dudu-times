import { useEffect, useState } from "react"

import { ConatinerCardRight } from "./styles"
import { getNewsWire } from "../../../../services/news-wire"
import { Card } from "../card"
import { TbPointFilled } from 'react-icons/tb'
import { A, DivImgTitle, DivSource, P, Title, I, Span } from "../styles-cards"

export const CardRight = () => {
  const [newWire, setNewWire] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNewsWire()
      const newsWire = await data.results
      console.log('NewsWire', newsWire)
      setNewWire(newsWire)
    }
    fetchData()
  }, [])

  return (
    <ConatinerCardRight>
      {!newWire && <h1>Populares não encontrados</h1>}
      {newWire && newWire.slice(0, 8).map((wire, index) => {
        return <A key={index} href={wire.url} target="_blank" rel="noreferrer" style={{ width: '100%' }} >
          <Card>

            <DivImgTitle>
              <Title>Title: {wire.title}</Title>
              {!wire.multimedia && <p>Imagem não encontrada</p>}
              {wire.multimedia && <img src={wire.multimedia[1].url} alt={wire.title} />}
            </DivImgTitle>

            {wire.multimedia && <P><I><TbPointFilled /></I>{wire.multimedia[1].caption}</P>}

            <P><I><TbPointFilled /></I>{wire.abstract}</P>

            <DivSource>
              <div>
                <P><Span>{wire.byline}</Span></P>
                <P >Publicado: {wire.published_date}</P>
              </div>
              <P>Fonte: {wire.source}</P>
            </DivSource>

          </Card>
        </A>
      })}
    </ConatinerCardRight>
  )
}