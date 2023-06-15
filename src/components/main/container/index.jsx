import { forwardRef, useEffect, useRef, useState } from "react"

import { getArticles } from "../../../services/articles"
import { ContainerMain } from "./styles"
import { getMostPopular } from "../../../services/most-popular"
import { Card } from "../cards/card"
import { getNewsWire } from "../../../services/news-wire"
import { CardCenter } from "../cards/card-center"
import { CardLeft } from "../cards/card-left"
import { CardRight } from "../cards/card-right"
import { Form } from "../form"

export const Container = () => {
  const [articlesList, setArticlesList] = useState()
  const [mostPopularList, setMostPopular] = useState()
  const [newWire, setNewWire] = useState()
  const [subject, setSubject] = useState()

  const formRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNewsWire()
      const newsWire = await data.results
      console.log('NewsWire', newsWire)
      setNewWire(newsWire)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMostPopular()
      const mostPopular = await data.results
      console.log('MostPopular', data.results);
      setMostPopular(mostPopular)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(subject)
      const articles = await data.response.docs
      console.log('Articles', articles)
      setArticlesList(articles)
    }
    fetchData()
  }, [subject])

  console.log('Form',formRef);
  return (
    <>
   ' <Form ref={formRef} />

      <ContainerMain >
 
        <CardCenter>
          {!articlesList && <h1>Procurando artigos</h1>}

          {articlesList && articlesList.map((article, index) => {
            return <Card key={index} >

              <h1>Card Center</h1>
              <p>Index: {index}</p>
              <p>Abstract:{article.abstract}</p>
              <p>Assinatura: {article.byline.original}</p>
              <p>Titulo: {article.headline.main}</p>
              <p>Paragrafo Inicial:{article.lead_paragraph}</p>
              <p>Data :{article.pub_date}</p>
              <p>Trecho :{article.snippet}</p>
              <p>Font :{article.source}</p>

            </Card>
          })}
        </CardCenter>

        <CardLeft>
          {!mostPopularList && <h1>Populares não encontrados</h1>}
          {mostPopularList && mostPopularList.slice(0, 10).map((popular, index) => {
            return <Card key={index} >
              <h1>Card Left</h1>
              <p>Index: {index}</p>
              <p>Titulo: {popular.title}</p>
              <p>Abstract:{popular.abstract}</p>
              <p>Assinatura: {popular.byline}</p>
              {popular.media[0] && <p>Caption(acho q é resumo): {popular.media[0].caption}</p>}

              <p>Data: {popular.published_date}</p>
              <p>Font :{popular.source}</p>

              {popular.media[0] && <img src={popular.media[0]['media-metadata'][1].url} alt="" />}

            </Card>
          })}
        </CardLeft>

        <CardRight>
          {!newWire && <h1>Populares não encontrados</h1>}
          {newWire && newWire.slice(0, 10).map((wire, index) => {
            return <Card key={index}  >

              <h1>Card Right</h1>
              <p>Index: {index}</p>
              <p>Abstract: {wire.abstract}</p>
              <p>Assinatura: {wire.byline}</p>

              {!wire.multimedia && <p>Imagem não encontrada</p>}
              {wire.multimedia && <img src={wire.multimedia[1].url} alt="" />}
            </Card>
          })}
        </CardRight>

      </ContainerMain>
    </>
  )
}