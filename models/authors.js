const authors = (connection, sequelize) => {
  return connection.define('authors', {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: sequelize.STRING, allowNull: false },
    lastName: { type: sequelize.STRING, allowNull: false }
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, {
    paranoid: true,
  })
}

module.exports = authors
