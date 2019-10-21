import nodemailer from 'nodemailer';
import { resolve } from 'path';
import exphbs from 'express-handlebars';
import nodemailerhbs from 'nodemailer-express-handlebars';
import mailerConfig from '../config/mailer';

class Mailer {
  constructor() {
    const { host, port, secure } = mailerConfig;
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: null,
    });

    this.configureTemplates();
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailerConfig.default,
      ...message,
    });
  }

  configureTemplates() {
    const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');
    this.transporter.use(
      'compile',
      nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          defaultLayout: 'default',
          extname: '.hbs',
        }),
        viewPath,
        extName: '.hbs',
      })
    );
  }
}

export default new Mailer();
