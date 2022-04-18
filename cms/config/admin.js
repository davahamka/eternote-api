module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '44833f582b4a9aa755700e0ed87ba596'),
  },
});
