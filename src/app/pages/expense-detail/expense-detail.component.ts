import { ActivatedRoute } from '@angular/router';
import { ExpenseGroupService } from './../../services/expense-group.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { ExpenseGroupIdAndNameResponse } from './../../dtos/ExpenseGroup/expenseGroupIdAndNameResponse';
import { UpdateExpenseRequest } from './../../dtos/Expense/UpdateExpenseRequest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {
  updateExpenseRequest : UpdateExpenseRequest = {
    expenseId : 0,
    expenseGroupId : 0,
    expenseAmount : 0,
    date : new Date,
    description : ""
  }
  expenseGroupIdAndNameResponses : ExpenseGroupIdAndNameResponse[] = [];

  constructor(
    private expenseService : ExpenseService,
    private expenseGroupService : ExpenseGroupService,
    private activatedRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.expenseGroupService.getAllExpenseGroupIdAndNames().subscribe(response => {
      this.expenseGroupIdAndNameResponses = response;
    });
    this.expenseService.getExpenseById(this.activatedRoute.snapshot.params['expenseId']).subscribe(response => {
      this.updateExpenseRequest = response;
    })
  }
}