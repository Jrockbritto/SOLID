import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private mailprovider: IMailProvider,
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error("user already exists.")
        }

        const user = new User(data);

        await this.userRepository.save(user);

        await this.mailprovider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: "Equipe do meu app",
                email: "equipe@equipe.com",
            },
            subject: "Seja bem vindo a plataforma",
            body: "<p>Você ja pode fazer login na nossa plataforma</p>"
        })
    };
}