module.exports = ({ env }) => ({
  host: env('HOST', '172.23.254.1'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
