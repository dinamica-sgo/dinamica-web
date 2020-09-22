import { Address } from "./Address";
import { Branch } from "./Branch";
import { User } from "./User";
import { Transaction } from "./Transaction";
import { Fee } from "./Fee";

export interface Company {
    companyId: number;
    companyCode: number;
    firstName: string;
    lastName: string;
    companyType: string;
    provide: string;
    providerType: string;
    picture: string;
    mobile: number;
    address: Address[];
    branches: Branch[];
    users: User[];
    transactionsByprovider: Transaction[];
    transactionsByCustomer: Transaction[];
    fees: Fee[];
}