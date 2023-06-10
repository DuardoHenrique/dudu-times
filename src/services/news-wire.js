import { myKey } from "../password"

export async function getNewsWire() {
  const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${myKey}`)
  const data = await response.json()
  return data
}