module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString: env("DATABASE_URL"),
    },
    pool: { min: 0 },
  },
});
