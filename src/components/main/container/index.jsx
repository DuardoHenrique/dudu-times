import { useEffect, useState } from "react"
import { getArticles } from "../../../services/articles"
import { ContainerMain } from "./styles"
import { Card } from "../card"

export const Container = () => {
  const [articlesList, setArticlesList] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles()
      const articles = await data.response.docs
      console.log(articles)
      setArticlesList(articles)
    }
    fetchData()
  }, [])

  return (
    <ContainerMain>
      {!articlesList && <h1>Nenhum artigo encontrado</h1>}
      {articlesList && articlesList.map((article, index) => {
        return (
          <Card article={article} key={index} />
        )


      })}

    </ContainerMain>
  )
}