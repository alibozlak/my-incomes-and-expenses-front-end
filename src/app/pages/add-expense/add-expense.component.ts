import { ExpenseGroupService } from './../../services/expense-group.service';
import { ExpenseGroupIdAndNameResponse } from './../../dtos/ExpenseGroup/expenseGroupIdAndNameResponse';
import { CreateExpenseRequest } from './../../dtos/Expense/CreateExpenseRequest';
import { Component, OnInit } from '@angular/core';
import { AxpenseService } from 'src/app/services/axpense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  createExpenseRequest : CreateExpenseRequest = {
    expenseGroupId : 0,
    expenseAmount : 0,
    date : new Date(),
    description : ""
  }
  expenseGroupIdAndNameResponses : ExpenseGroupIdAndNameResponse[] = [];

  constructor(
    private expenseService : AxpenseService,
    private expenseGroupService : ExpenseGroupService
  ){}

  ngOnInit(): void {
    this.expenseGroupService.getAllExpenseGroupIdAndNames().subscribe(response => {
      this.expenseGroupIdAndNameResponses = response;
    })
  }

  post(){
    this.expenseService.post(this.createExpenseRequest).subscribe(response => {
      if (response.success) {
        alert("Gider veritabanına eklendi");
        this.createExpenseRequest.expenseGroupId = 0;
        this.createExpenseRequest.expenseAmount = 0;
        this.createExpenseRequest.date = new Date();
        this.createExpenseRequest.description = "";
      } else {
        alert("Ekleme işlemi başarısız!!");
      }
    })
  }

  buttonClass(){
    if (this.createExpenseRequest.expenseAmount < 0) {
      return "btn btn-danger mt-3 disabled";
    }
    return "btn btn-danger mt-3";
  }
}
