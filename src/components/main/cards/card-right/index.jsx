import { useEffect, useState } from "react"

import { ConatinerCardRight } from "./styles"
import { getNewsWire } from "../../../../services/news-wire"
import { Card } from "../card"
import { TbPointFilled } from 'react-icons/tb'
import { H2 } from "../../../book-review/card/styles"
import { A, DivImgTitle, DivSource, P, Title, I, Span } from "../styles-cards"

export const CardRight = () => {
  const [newWire, setNewWire] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNewsWire()
      const newsWire = await data.results
      setNewWire(newsWire)
    }
    fetchData()
  }, [])

  return (
    <ConatinerCardRight>
      {!newWire && <H2>Populares não encontrados</H2>}
      {newWire && newWire.slice(0, 8).map((wire, index) => {
        return <A key={index} href={wire.url} target="_blank" rel="noreferrer" >
          <Card>

            <DivImgTitle>
              <Title>{wire.title}</Title>
              {!wire.multimedia && <P>Imagem não encontrada</P>}
              {wire.multimedia.length > 0 && <img src={wire.multimedia[1].url} alt={wire.title} />}
            </DivImgTitle>

            {wire.abstract
              ?
              <P><I><TbPointFilled /></I>{wire.abstract}</P>
              :
              <P><I><TbPointFilled /></I>Tópico não encontrado.</P>
            }

            {wire.multimedia.length > 0
              &&
              <P><I><TbPointFilled /></I>{wire.multimedia[1].caption}</P>
            }

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