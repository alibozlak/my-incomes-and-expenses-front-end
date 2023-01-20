export interface CreateExpenseRequest {
    expenseGroupId : number;
    expenseAmount : number;
    date : Date;
    description : string;
}