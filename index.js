const express = require('express')
const { getAllAuthors, getAuthorByIdWithNovelsAndGenres } = require('./controllers/authors.js')
const { getAllNovels, getNovelsByIdWithAuthorsAndGenres } = require('./controllers/novels.js')
const { getAllGenres, getGenreByIdWithNovelsAndAuthors } = require('./controllers/genres.js')


const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorByIdWithNovelsAndGenres)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreByIdWithNovelsAndAuthors)

app.get('/novels', getAllNovels)

app.get('/novels/:id', getNovelsByIdWithAuthorsAndGenres)

app.all('*', (request, response) => {
  return response.status(404).send('Nothing here to read about.')
})

app.listen(6969, () => {
  console.log('Unfolding dog-ear pages on 6969...') // eslint-disable-line no-console
})
