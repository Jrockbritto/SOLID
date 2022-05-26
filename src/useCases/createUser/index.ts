import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProviders";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import 'dotenv/config';


const mailtrapMailProvider = new MailtrapMailProvider(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASSWORD,
);
const postgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUserRepository,
    mailtrapMailProvider
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserController, createUserUseCase };