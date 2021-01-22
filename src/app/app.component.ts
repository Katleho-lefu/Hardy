import { Component } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { CalculatorService } from './calculator.service';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';
import { Income } from './income/income_interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  incomes: Income = {

    description: "",
    added_amount : null,
  }

  modalRef: MDBModalRef;
  total_amount: number = 0;

  data:any[]=[];

  constructor(private modalService: MDBModalService,public calculator:CalculatorService) {
    this.data = this.calculator.get_incomes()
  }

  openModal_income() {
    this.modalRef = this.modalService.show(IncomeComponent);
  }

  openModal_expense() {
    this.modalRef = this.modalService.show(ExpenseComponent);
  }
}
