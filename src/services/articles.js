import { myKey } from "../password"

const date = new Date();
const year = date.getFullYear();

export async function getArticles(subject) {
  const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${subject}&fq=pub_year:(${year})&api-key=${myKey}`)
  const data = await response.json()
  return data
}