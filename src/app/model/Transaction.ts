import { Company } from "./Company";
import { TransactionType } from "./TransactionType";

export interface Transaction {
    transctionId: number;
    transactionDate: Date;
    comments: string;
    customer: Company;
    provider: Company;
    amount: number;
    transactionType: TransactionType;
}