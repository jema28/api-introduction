const posterContainer = document.getElementById('poster-gallery')

fetch('http://www.omdbapi.com/?s=harry+potter&apikey=thewdb')
  .then(response => response.json())
  .then(data => {
    const movies = data['Search']
    const moviesSortedByYear = movies.sort((a, b) => a['Year'] - b['Year'])
    const filteredMovies = moviesSortedByYear.filter(movie => movie['Title'] !== "Harry Potter and the Forbidden Journey" && movie['Type'] !== "game")
    const posterUrls = filteredMovies.map(movie => movie['Poster'])

    return posterUrls.map(url => {
      const poster = document.createElement('img')
      poster.setAttribute("src", url)
      poster
        .classList
        .add("poster")
      posterContainer.appendChild(poster);
    })
  })
  .catch(error => console.log(error))