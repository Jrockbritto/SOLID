//Formatação a entidade de User, assim como obrigações de cada propriedade

import { uuid } from 'uuidv4';

export class User {

    public readonly id?: string;

    public name!: string;
    public email!: string;
    public password!: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);

        // Removendo responsabilidade de atribuição de uuid do db, importante caso haja uma mudança de tecnologia
        if(!id) {
            this.id = uuid();
        }
    }
}