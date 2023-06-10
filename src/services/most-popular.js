import { myKey } from "../password";

export async function getMostPopular() {
  const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${myKey}`)
  const data = await response.json()
  return data
}