const url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=95915dd3c68e4d9c91a0db81e842531d";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
