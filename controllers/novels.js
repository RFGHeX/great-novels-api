const models = require('../models')

const getAllNovels = async (request, response) => {
  try {
    const allNovels = await models.novels.findAll({
      include: [{
        model: models.authors,
      },
      {
        model: models.genres,
      }],
    })

    return response.send(allNovels)
  } catch (error) {
    return response.status(500).send('Could not retrieve novels, please try again.')
  }
}

const getNovelsByIdWithAuthorsAndGenres = async (request, response) => {
  try {
    const { id } = request.params
    const matchingNovels = await models.novels.findAll({
      include: [{
        model: models.authors,
      },
      {
        model: models.genres,
      }],
      where: {
        [models.Op.or]: [
          { id },
          { title: { [models.Op.like]: `%${id.toLowerCase()}%` } }
        ]
      }
    })

    return matchingNovels
      ? response.send(matchingNovels)
      : response.status(404).send(`Could not find a novel with a matching id of ${id}`)
  } catch (error) {
    return response.status(500).send('Could not retrieve the novel, please try again')
  }
}

module.exports = { getAllNovels, getNovelsByIdWithAuthorsAndGenres }
