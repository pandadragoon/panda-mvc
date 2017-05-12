export default {
  PORT: 3000,
  db: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'test'
    }
  }
}