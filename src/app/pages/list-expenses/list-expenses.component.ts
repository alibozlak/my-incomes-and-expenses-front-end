import { ExpenseGetAllColumnResponse } from './../../dtos/Expense/ExpenseGetAllColumnResponse';
import { ExpenseGroupIdAndNameResponse } from './../../dtos/ExpenseGroup/expenseGroupIdAndNameResponse';
import { ExpenseGroupService } from './../../services/expense-group.service';
import { Component, OnInit } from '@angular/core';
import { ExpenseAllColumnAndGroupName } from 'src/app/dtos/Expense/ExpenseAllColumnAndGroupName';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {
  expenseAllColumnAndGroupNames : ExpenseAllColumnAndGroupName[] = []

  constructor(
    private expenseService : ExpenseService,
    private expenseGroupService : ExpenseGroupService
  ){}

  ngOnInit(): void {
    let expenseGroupIdAndNames : ExpenseGroupIdAndNameResponse[] = [];
    this.expenseGroupService.getAllExpenseGroupIdAndNames().subscribe(response => {
      expenseGroupIdAndNames = response;
    });
    let expenseGetAllColumnResponses : ExpenseGetAllColumnResponse[] = [];
    this.expenseService.getAllExpense().subscribe(response => {
      expenseGetAllColumnResponses = response;
      expenseGetAllColumnResponses.forEach(expenseGetAllColumnResponse => {
        let groupName = "";
        expenseGroupIdAndNames.forEach(expenseGroupIdAndName => {
          if (expenseGroupIdAndName.expenseGroupId === expenseGetAllColumnResponse.expenseGroupId) {
            groupName = expenseGroupIdAndName.expenseGroupName;
          }
        })
        this.expenseAllColumnAndGroupNames.push({
          expenseId : expenseGetAllColumnResponse.expenseId,
          expenseGroupName : groupName,
          expenseAmount : expenseGetAllColumnResponse.expenseAmount,
          date : expenseGetAllColumnResponse.date,
          description : expenseGetAllColumnResponse.description
        });
      })
    });
  }
}
