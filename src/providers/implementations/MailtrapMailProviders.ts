import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

//implementação de fato de um envio de email seguindo a padrodização definida anteriormente

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail
    constructor(host: any, port: any, user: any, password: any) {
        this.transporter = nodemailer.createTransport({
            host: host,
            port: port,
            auth: {
              user: user,
              pass: password
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