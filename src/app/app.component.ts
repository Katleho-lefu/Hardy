import { Component } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { CalculatorService } from './calculator.service';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalRef: MDBModalRef;

  total_amount: number = 0;

  constructor(private modalService: MDBModalService,public calculator:CalculatorService) {}

  openModal_income() {
    this.modalRef = this.modalService.show(IncomeComponent);
  }

  openModal_expense() {
    this.modalRef = this.modalService.show(ExpenseComponent);
  }
}
