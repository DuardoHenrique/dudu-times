import { useEffect, useState, useRef } from "react"

import { ConatinerCardCenter } from "./styles"
import { getArticles } from "../../../../services/articles"
import { Card } from "../card"
import { A, DivSource, I, P, Title } from "../styles-cards"
import { TbPointFilled } from "react-icons/tb"
import { Form } from "../../form"

export const CardCenter = () => {
  const [articlesList, setArticlesList] = useState()
  const [subject, setSubject] = useState('');

  const formRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(subject)

      const articles = await data.response.docs
      setArticlesList(articles)
    }
    fetchData()
  }, [subject])

  const handleClickInput = () => {
    setSubject(formRef.current.value)
  }

  return (
    <ConatinerCardCenter>

      <Form
        ref={formRef}
        onclick={handleClickInput}
        placeholder={'Ex: Brasil'}
      />

      {!articlesList && <h2>Procurando artigos</h2>}

      {articlesList && articlesList.map((article, index) => {
        return <A key={index} href={article.web_url} target="_blank" rel="noreferrer">

          <Card reduced>

            <Title>{article.headline.main}</Title>

            <P><I><TbPointFilled /></I>{article.abstract}</P>
            <P><I><TbPointFilled /></I>{article.lead_paragraph}</P>

            <DivSource>
              <div>
                <P>Publicado: {article.pub_date}</P>
                <P>{article.byline.original}</P>
              </div>

              <P>Fonte: {article.source}</P>
            </DivSource>

          </Card>
        </A>
      })}

    </ConatinerCardCenter>
  )
}