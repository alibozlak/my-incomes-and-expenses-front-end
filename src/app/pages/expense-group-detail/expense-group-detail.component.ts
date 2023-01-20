import { ExpenseGroupService } from './../../services/expense-group.service';
import { ExpenseGroupGetAllColumnResponse } from './../../dtos/ExpenseGroup/expenseGroupGetAllColumnResponse';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/Result';

@Component({
  selector: 'app-expense-group-detail',
  templateUrl: './expense-group-detail.component.html',
  styleUrls: ['./expense-group-detail.component.css']
})
export class ExpenseGroupDetailComponent implements OnInit {
  expenseGroupGetAllColumnResponse : ExpenseGroupGetAllColumnResponse = {
    expenseGroupId : 0,
    expenseGroupName : "",
    description : ""
  }
  resultUpdate : Result = {
    isSuccess : false
  }

  constructor(
    private expenseGroupService : ExpenseGroupService,
    private activatedRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.expenseGroupService.getById(this.activatedRoute.snapshot.params['id']).subscribe(response => {
      this.expenseGroupGetAllColumnResponse = response;
    })
  }

  buttonUpdateClass() : string {
    if (this.expenseGroupGetAllColumnResponse.expenseGroupName.length < 2) {
      return "btn btn-primary mt-3 disabled";
    }
    return "btn btn-primary mt-3";
  }

  put(){
    this.expenseGroupService.putExpenseGroup(this.expenseGroupGetAllColumnResponse).subscribe(response => {
      this.resultUpdate.isSuccess = response.isSuccess;
    })
  }
}
