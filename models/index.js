const sequelize = require('sequelize')
const authorsModels = require('./authors')
const novelsModels = require('./novels')
const genresModels = require('./genres')
const novelGenresModels = require('./novelGenres')
const allConfigs = require('../config/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const authors = authorsModels(connection, sequelize)
const novels = novelsModels(connection, sequelize, authors)
const genres = genresModels(connection, sequelize)
const novelGenres = novelGenresModels(connection, sequelize, genres, novels)

authors.hasMany(novels)
novels.belongsTo(authors)

novels.belongsToMany(genres, { through: novelGenres })
genres.belongsToMany(novels, { through: novelGenres })

module.exports = {
  authors, novels, genres, novelGenres, Op: sequelize.Op
}
