import { ExpenseGroupGetAllColumnResponse } from './../dtos/ExpenseGroup/expenseGroupGetAllColumnResponse';
import { ExpenseGroupIdAndNameResponse } from './../dtos/ExpenseGroup/expenseGroupIdAndNameResponse';
import { CreateExpenseGroupRequest } from './../dtos/ExpenseGroup/createExpenseGroup';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../Result';
import { UpdateExpenseGroupRequest } from '../dtos/ExpenseGroup/updateExpenseGroupRequest';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGroupService {
  private url = "http://localhost:8080/api/expense-group";

  constructor(private httpClient : HttpClient) { }

  postExpenseGroup(craeteExpenseGroupRequest : CreateExpenseGroupRequest){
    return this.httpClient.post<Result>(this.url,craeteExpenseGroupRequest);
  }

  getAllExpenseGroupIdAndNames(){
    let newUrl = this.url + "/get-all-id-and-names";
    return this.httpClient.get<ExpenseGroupIdAndNameResponse[]>(newUrl);
  }

  getById(expenseGroupId : number){
    let newUrl = this.url + "/get-by-id/" + expenseGroupId;
    return this.httpClient.get<ExpenseGroupGetAllColumnResponse>(newUrl);
  }

  putExpenseGroup(updateExpenseGroupRequest : UpdateExpenseGroupRequest){
    return this.httpClient.put<Result>(this.url,updateExpenseGroupRequest);
  }
}
