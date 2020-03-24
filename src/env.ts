export const ENV = {
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    QUEUE_URL: process.env.QUEUE_URL,
    PORT: process.env.PORT,
    POSTGRES_DATABASE_URL:
        process.env.POSTGRES_DATABASE_URL ||
        `postgres://${process.env.POSTGRES_DATABASE_USER}:${process.env.POSTGRES_DATABASE_PW}@${process.env.POSTGRES_DATABASE_HOST_DEV}/catalog`
}