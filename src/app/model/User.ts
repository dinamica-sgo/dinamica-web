import { Company } from "./Company";

export interface User {
    userId: number;
    userName: string;
    userMail:string;
    userPassword: string;
    status: string;
    company: Company;
}