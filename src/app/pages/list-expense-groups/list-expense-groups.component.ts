import { ExpenseGroupService } from './../../services/expense-group.service';
import { ExpenseGroupIdAndNameResponse } from './../../dtos/ExpenseGroup/expenseGroupIdAndNameResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-expense-groups',
  templateUrl: './list-expense-groups.component.html',
  styleUrls: ['./list-expense-groups.component.css']
})
export class ListExpenseGroupsComponent implements OnInit {
  expenseGroupIdAndNameResponses : ExpenseGroupIdAndNameResponse[] = [];

  constructor(private expenseGroupService : ExpenseGroupService){}

  ngOnInit(): void {
    this.expenseGroupService.getAllExpenseGroupIdAndNames().subscribe(response => {
      this.expenseGroupIdAndNameResponses = response;
    })
  }
}
