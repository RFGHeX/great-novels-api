module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('authors', [
      { nameFirst: 'Bram', nameLast: 'Stoker' },
      { nameFirst: 'Oscar', nameLast: 'Wilde' },
      { nameFirst: 'Alice', nameLast: 'Walker' },
      { nameFirst: 'leo', nameLast: 'Tolstoy' },
      { nameFirst: 'Charles', nameLast: 'Dickens' },
      { nameFirst: 'Arthur', nameLast: 'Miller' },
      { nameFirst: 'Alexandre', nameLast: 'Dumas' },
      { nameFirst: 'Arthur Conan', nameLast: 'Doyle' },
      { nameFirst: 'Robert Louis', nameLast: 'Stevenson' },
      { nameFirst: 'Fyodor', nameLast: 'Dostoyevsky' },
      { nameFirst: 'Agatha', nameLast: 'Christie' },
      { nameFirst: 'Ray', nameLast: 'Bradbury' },
      { nameFirst: 'George', nameLast: 'Orwell' },
      { nameFirst: 'H.G.', nameLast: 'Wells' },
      { nameFirst: 'Chinua', nameLast: 'Achebe' },
    ])

    await queryInterface.bulkInsert('novels', [
      { title: 'Dracula', authorId: '1' },
      { title: 'The Picture of Dorian Gray', authorId: '2' },
      { title: 'The Color Purple', authorId: '3' },
      { title: 'War and Peace', authorId: '4' },
      { title: 'A Tale of Two Cities', authorId: '5' },
      { title: 'The Cruicible', authorId: '6' },
      { title: 'The Three Musketeers', authorId: '7' },
      { title: 'The Hound of Baskervilles', authorId: '8' },
      { title: 'The Strange Case of Dr.Jekyll and Mr.Hyde', authorId: '9' },
      { title: 'Crime and Punishment', authorId: '10' },
      { title: 'Murder on the Orient Express', authorId: '11' },
      { title: 'Fahrenheit 451', authorId: '12' },
      { title: 'Animal Farm', authorId: '13' },
      { title: 'The Time Machine', authorId: '14' },
      { title: 'Things Fell Apart', authorId: '15' },
    ])

    await queryInterface.bulkInsert('genres', [
      { genre: 'Fiction' },
      { genre: 'Horror' },
      { genre: 'Historical' },
      { genre: 'Mystery' },
      { genre: 'Russian Literature' },
      { genre: 'Science Fiction' },
      { genre: 'Historical Fiction' },
      { genre: 'Fantasy' },
      { genre: 'Gothic' },
      { genre: 'War' },
      { genre: 'Drama' },
      { genre: 'plays' },
      { genre: 'Adventure' },
      { genre: 'French Literature' },
      { genre: 'Crime' },
      { genre: 'Thriller' },
      { genre: 'Dystopia' },
      { genre: 'Time Travel' },
      { genre: 'African Literature' }
    ])

    return queryInterface.bulkInsert('novelGenres', [
      { novelId: '1', genreId: '1' },
      { novelId: '1', genreId: '2' },
      { novelId: '1', genreId: '8' },
      { novelId: '2', genreId: '1' },
      { novelId: '2', genreId: '2' },
      { novelId: '2', genreId: '9' },
      { novelId: '2', genreId: '8' },
      { novelId: '3', genreId: '1' },
      { novelId: '3', genreId: '7' },
      { novelId: '4', genreId: '1' },
      { novelId: '4', genreId: '7' },
      { novelId: '4', genreId: '10' },
      { novelId: '4', genreId: '5' },
      { novelId: '5', genreId: '1' },
      { novelId: '5', genreId: '7' },
      { novelId: '6', genreId: '1' },
      { novelId: '6', genreId: '7' },
      { novelId: '6', genreId: '11' },
      { novelId: '6', genreId: '12' },
      { novelId: '7', genreId: '1' },
      { novelId: '7', genreId: '7' },
      { novelId: '7', genreId: '13' },
      { novelId: '7', genreId: '14' },
      { novelId: '8', genreId: '1' },
      { novelId: '8', genreId: '4' },
      { novelId: '8', genreId: '15' },
      { novelId: '8', genreId: '16' },
      { novelId: '9', genreId: '1' },
      { novelId: '9', genreId: '4' },
      { novelId: '9', genreId: '6' },
      { novelId: '9', genreId: '2' },
      { novelId: '10', genreId: '1' },
      { novelId: '10', genreId: '5' },
      { novelId: '10', genreId: '4' },
      { novelId: '11', genreId: '1' },
      { novelId: '11', genreId: '4' },
      { novelId: '12', genreId: '1' },
      { novelId: '12', genreId: '6' },
      { novelId: '12', genreId: '17' },
      { novelId: '13', genreId: '1' },
      { novelId: '13', genreId: '6' },
      { novelId: '13', genreId: '17' },
      { novelId: '14', genreId: '1' },
      { novelId: '14', genreId: '6' },
      { novelId: '14', genreId: '18' },
      { novelId: '15', genreId: '1' },
      { novelId: '15', genreId: '7' },
      { novelId: '15', genreId: '19' },
    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('novelGenres')

    await queryInterface.bulkDelete('genres')

    await queryInterface.bulkDelete('novels')

    return queryInterface.bulkDelete('authors')
  }
}
