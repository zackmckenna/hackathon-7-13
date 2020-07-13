import fetch from 'node-fetch'

export const getWiki = async ({ searchString }) => {
  const processedSearchString = searchString.split(' ').join('_')

  const response = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${processedSearchString}`
  )

  const json = await response.json()

  return {
    searchString,
    titles: json.titles.display,
    extract: json.extract,
    description: json.description,
    pageId: json.pageid,
    mobileUrl: json.content_urls.mobile.page,
    desktopUrl: json.content_urls.desktop.page,
  }
}
