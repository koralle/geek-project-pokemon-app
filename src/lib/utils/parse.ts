export const parseNumberFromUrl = (url: string) => {
  const urlObj = new URL(url)
  const paths = urlObj.pathname.split('/')
  // Remove empty strings from split result and get the last element
  const id = paths.filter(Boolean).pop()
  return id ? Number.parseInt(id, 10) : undefined
}
