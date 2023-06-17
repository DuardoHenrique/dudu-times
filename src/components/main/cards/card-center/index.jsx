import { useEffect, useState } from "react"

import { ConatinerCardCenter } from "./styles"
import { getArticles } from "../../../../services/articles"
import { Card } from "../card"
import { A, DivImgTitle, DivSource, I, P, Title } from "../styles-cards"
import { TbPointFilled } from "react-icons/tb"

export const CardCenter = ({ subject }) => {
  const [articlesList, setArticlesList] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(subject)
      const articles = await data.response.docs
      console.log('Articles', articles)
      setArticlesList(articles)
    }
    fetchData()
  }, [subject])

  console.log(articlesList);
  return (
    <ConatinerCardCenter>

      {!articlesList && <h2>Procurando artigos</h2>}

      {articlesList && articlesList.map((article, index) => {
        return <A key={index} href={article.web_url} target="_blank" rel="noreferrer">

          <Card>

            <DivImgTitle>
              <Title>{article.headline.main}</Title>
            </DivImgTitle>

            <P><I><TbPointFilled /></I>{article.abstract}</P>
            <P><I><TbPointFilled /></I>{article.lead_paragraph}</P>
            <P><I><TbPointFilled /></I>{article.snippet}</P>

            <DivSource>
              <div>
                <P>Data :{article.pub_date}</P>
                <P>Assinatura: {article.byline.original}</P>
              </div>

              <P>Fonte: {article.source}</P>
            </DivSource>

          </Card>
        </A>
      })}

    </ConatinerCardCenter>
  )
}

// popular.url