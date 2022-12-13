module.exports = ({ env }) => ({
  host: env('HOST', 'dabase'),
  port: env.int('PORT', 5432),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
