// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    debug: true,
    connection: {
      filename: './database/users.db3',
    },
    migrations: {
      directory: './database/migrations',
    }
  },

};
