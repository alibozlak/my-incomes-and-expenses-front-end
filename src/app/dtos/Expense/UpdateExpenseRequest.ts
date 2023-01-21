export interface UpdateExpenseRequest {
    expenseId : number;
    expenseGroupId : number;
    expenseAmount : number;
    date : Date;
    description : string;
}