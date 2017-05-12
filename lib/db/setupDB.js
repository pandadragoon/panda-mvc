import knex from 'knex';
import bookshelf from 'bookshelf';

const setupDB = (dbConfig)=> {
  let knexInstance = knex(dbConfig);
  let bookshelfInstance = bookshelf(knexInstance);

  return bookshelfInstance;
}

export default setupDB;