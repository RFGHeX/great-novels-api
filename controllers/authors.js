const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const allAuthors = await models.authors.findAll()

    return response.send(allAuthors)
  } catch (error) {
    return response.status(500).send('Could not retrieve authors, please try again.')
  }
}

const getAuthorByIdWithNovelsAndGenres = async (request, response) => {
  try {
    const { id } = request.params
    const matchingAuthor = await models.authors.findOne({
      include: [{
        include: [{ model: models.genres }],
        model: models.novels
      }],
      where: { id },

    })

    return matchingAuthor
      ? response.send(matchingAuthor)
      : response.status(404).send(`Could not find an author with a matching id of ${id}`)
  } catch (error) {
    return response.status(500).send('Could not retrieve the author, please try again')
  }
}


module.exports = { getAllAuthors, getAuthorByIdWithNovelsAndGenres }
