module.exports = {
    development: {
        client: 'pg',
        connection: `postgres://${process.env.POSTGRES_DATABASE_USER}:${process.env.POSTGRES_DATABASE_PW}@${process.env.POSTGRES_DATABASE_HOST_DEV}/catalog`,
        migration: {
            directory: __dirname + '/migrations',
        },
        seeds: {
            directory: __dirname + '/seeds',
        },
    },
};
