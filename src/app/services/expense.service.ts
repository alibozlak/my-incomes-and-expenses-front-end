import { ExpenseGetAllColumnResponse } from './../dtos/Expense/ExpenseGetAllColumnResponse';
import { CreateExpenseRequest } from '../dtos/Expense/CreateExpenseRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../Result';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private url = "http://localhost:8080/api/expense";

  constructor(private httpClient : HttpClient) { }

  post(createExpenseRequest : CreateExpenseRequest){
    return this.httpClient.post<Result>(this.url,createExpenseRequest);
  }

  getAllExpense(){
    let newUrl = this.url + "/get-all";
    return this.httpClient.get<ExpenseGetAllColumnResponse[]>(newUrl);
  }

  getExpenseById(expenseId : number){
    let newUrl = this.url + "/get-by-id/" + expenseId;
    return this.httpClient.get<ExpenseGetAllColumnResponse>(newUrl);
  }
}
