import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Mailer from '../../lib/Mailer';

class CancelationMailJob {
  get key() {
    return 'CancelationMailJob';
  }

  async handle({ data }) {
    const { appointment } = data;

    await Mailer.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancelation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new CancelationMailJob();
