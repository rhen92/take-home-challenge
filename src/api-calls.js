export const getArticles = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=izpj2v2p9CVxeQ2apgiARnPOqckEZiAi')
    .then(response => response.json())
}
