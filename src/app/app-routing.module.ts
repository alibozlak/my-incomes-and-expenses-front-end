import { AddExpenseComponent } from './pages/add-expense/add-expense.component';
import { ExpenseGroupDetailComponent } from './pages/expense-group-detail/expense-group-detail.component';
import { ListExpenseGroupsComponent } from './pages/list-expense-groups/list-expense-groups.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseGroupComponent } from './pages/add-expense-group/add-expense-group.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "add-expense-group", component : AddExpenseGroupComponent},
  {path : "list-expense-groups", component : ListExpenseGroupsComponent},
  {path : "expense-group-detail/:id", component : ExpenseGroupDetailComponent},
  {path : "add-expense", component : AddExpenseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
