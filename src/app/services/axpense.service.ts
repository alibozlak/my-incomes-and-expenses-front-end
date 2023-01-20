import { CreateExpenseRequest } from './../dtos/Expense/CreateExpenseRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../Result';

@Injectable({
  providedIn: 'root'
})
export class AxpenseService {
  private url = "http://localhost:8080/api/expense";

  constructor(private httpClient : HttpClient) { }

  post(createExpenseRequest : CreateExpenseRequest){
    return this.httpClient.post<Result>(this.url,createExpenseRequest);
  }
}
