import { myKey } from '../password'

export async function getBooks() {
  const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${myKey}`)
  const data = await response.json()
  return data
}