import { Result } from './../../Result';
import { ExpenseGroupService } from './../../services/expense-group.service';
import { CreateExpenseGroupRequest } from './../../dtos/ExpenseGroup/createExpenseGroup';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-expense-group',
  templateUrl: './add-expense-group.component.html',
  styleUrls: ['./add-expense-group.component.css']
})
export class AddExpenseGroupComponent {
  createExpenseGroupRequest : CreateExpenseGroupRequest = {
    expenseGroupName : "",
    description : ""
  }

  constructor(private expenseGroupService : ExpenseGroupService){}

  buttonClass() : string {
    if (this.createExpenseGroupRequest.expenseGroupName.length < 2) {
      return "btn btn-danger mt-3 disabled";
    }
    return "btn btn-danger mt-3";
  }

  post(){
    this.expenseGroupService.postExpenseGroup(this.createExpenseGroupRequest).subscribe(response => {
      if (response.success) {
        this.createExpenseGroupRequest.expenseGroupName = "";
        this.createExpenseGroupRequest.description = "";
        alert("Gider grubu başarılı bir ekilde eklendi");
      } else {
        alert("Ekleme yapılamadı!!");
      }
    })
  }
}
