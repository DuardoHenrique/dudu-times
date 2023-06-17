import { myKey } from "../password"

const date = new Date();
const month = String(date.getMonth() + 1).padStart(2, '0');
const year = date.getFullYear();
console.log(month, year);

export async function getArticles(subject) {
  const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${subject}&fq=pub_year:(${year})&api-key=${myKey}`)
  const data = await response.json()
  return data
}