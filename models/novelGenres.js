const titlesGenres = (connection, sequelize, genres, novels) => {
  return connection.define('novelGenres', {
    genreId: { type: sequelize.INTEGER, primaryKey: true, allowNull: false, references: { model: genres, key: 'id' } },
    novelId: { type: sequelize.STRING, primaryKey: true, allowNull: false, references: { model: novels, key: 'id' } },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, {
    paranoid: true,
  })
}

module.exports = titlesGenres
