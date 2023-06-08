import { myKey } from "../password"

export async function getArticles() {
  const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Brazil&api-key=${myKey}`)
  const data = await response.json()
  return data
}

// ?page=1
// &fq=pub_year(2023)