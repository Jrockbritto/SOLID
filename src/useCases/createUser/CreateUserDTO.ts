//DATA TRANSFER OBJECT Firma a tipagem de objeto que deve ser transmitida entre as camadas

export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
}