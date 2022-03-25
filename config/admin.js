module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7dbc934337e1538c6922a381f7b4141a'),
  },
});
