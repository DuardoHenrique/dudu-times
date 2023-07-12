import { myKey } from "../password"

export async function getFilms(subject) {
  const response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${subject}&api-key=${myKey}`)
  const data = await response.json()
  return data
}
