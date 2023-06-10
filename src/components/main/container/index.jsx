import { useEffect, useState } from "react"
import { getArticles } from "../../../services/articles"
import { ContainerMain } from "./styles"
import { CardAsideLeft } from "../card-aside-left"
import { getMostPopular } from "../../../services/most-popular"
import { CardMain } from "../card-main"
import { getNewsWire } from "../../../services/news-wire"
import { CardAsideRight } from "../card-aside-right"

export const Container = () => {
  const [articlesList, setArticlesList] = useState()
  const [mostPopularList, setMostPopular] = useState()
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
      const data = await getArticles()
      const articles = await data.response.docs
      console.log('Articles', articles)
      setArticlesList(articles)
    }
    fetchData()
  }, [])

  return (
    <ContainerMain>

      {!articlesList && <h1>Nenhum artigo encontrado</h1>}
      {articlesList && articlesList.map((article, index) => {
        return <CardAsideLeft article={article} key={index} />
      })}

      {!mostPopularList && <h1>Populares não encontrados</h1>}
      {mostPopularList && mostPopularList.map((popular, index) => {
        return <CardMain popular={popular} key={index} />
      })}

      {!newWire && <h1>Populares não encontrados</h1>}
      {newWire && newWire.map((wire, index) => {
        return <CardAsideRight wire={wire} key={index} />
      })}
    </ContainerMain>
  )
}