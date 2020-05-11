const models = require('../models')

const getAllGenres = async (request, response) => {
  try {
    const allGenres = await models.genres.findAll()

    return response.send(allGenres)
  } catch (error) {
    return response.status(500).send('Could not retrieve the genres, please try again.')
  }
}

const getGenreByIdWithNovelsAndAuthors = async (request, response) => {
  try {
    const { id } = request.params
    const matchingGenre = await models.genres.findOne({
      include: [{
        include: [{
          model: models.authors
        }],
        model: models.novels,
      }],
      where: { id },
    })

    return matchingGenre
      ? response.send(matchingGenre)
      : response.status(404).send(`Could not find a genre with a matching id of ${id}`)
  } catch (error) {
    return response.status(500).send('Could not retrieve the genre, please try again')
  }
}

module.exports = { getAllGenres, getGenreByIdWithNovelsAndAuthors }
