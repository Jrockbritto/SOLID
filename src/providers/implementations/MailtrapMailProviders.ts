import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";


//implementação de fato de um envio de email seguindo a padrodização definida anteriormente

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "76209a953c74d2",
              pass: "a9a5bcfa874ffc"
            }
          });
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html:message.body
        })
    }
}