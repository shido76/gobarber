export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    username: process.env.MAIL_USER,
    password: process.env.MAIL_PASS,
  },
  default: {
    from: 'Go Barber <noreply@gobarber.com>',
  },
};
