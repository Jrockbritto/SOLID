import { User } from "../entities/User";

//Resposavél por formalizar os métodos disponiveis no userRepository
export interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;

    save(user: User): Promise<void>;
}