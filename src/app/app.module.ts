import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddExpenseGroupComponent } from './pages/add-expense-group/add-expense-group.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ListExpenseGroupsComponent } from './pages/list-expense-groups/list-expense-groups.component';
import { ExpenseGroupDetailComponent } from './pages/expense-group-detail/expense-group-detail.component';
import { AddExpenseComponent } from './pages/add-expense/add-expense.component';
import { ListExpensesComponent } from './pages/list-expenses/list-expenses.component';
import { ExpenseDetailComponent } from './pages/expense-detail/expense-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddExpenseGroupComponent,
    ListExpenseGroupsComponent,
    ExpenseGroupDetailComponent,
    AddExpenseComponent,
    ListExpensesComponent,
    ExpenseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
