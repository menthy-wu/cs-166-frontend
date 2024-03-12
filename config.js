const config = {
  connectionString: process.env.NEXT_PUBLIC_SQL_DATABASE_URL,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.NEXT_PUBLIC_SQL_CERT,
  },
};
exports.config = config;
