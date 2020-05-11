const sequelize = require('sequelize')
const authorsModels = require('./authors')
const novelsModels = require('./novels')
const genresModels = require('./genres')
const novelGenresModels = require('./novelGenres')

const connection = new sequelize('greatNovels', 'greatNovels', 'b00kw0rm', {
  host: 'localhost', dialect: 'mysql'
})

const authors = authorsModels(connection, sequelize)
const novels = novelsModels(connection, sequelize, authors)
const genres = genresModels(connection, sequelize)
const novelGenres = novelGenresModels(connection, sequelize, genres, novels)

authors.hasMany(novels)
novels.belongsTo(authors)

novels.belongsToMany(genres, { through: novelGenres })
genres.belongsToMany(novels, { through: novelGenres })

module.exports = { authors, novels, genres, novelGenres }
