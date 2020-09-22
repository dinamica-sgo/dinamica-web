export interface Fee {
    feeId: number;
    dueDate: Date;
    quotas: number;
    currentQuota: number;
    amount: number;
    amortization: number;
    interest: number;
    late: number;
    balance: number;
}