import { Component } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalRef: MDBModalRef;

  total_amount: number = 5000

  constructor(private modalService: MDBModalService) {}

  openModal_income() {
    this.modalRef = this.modalService.show(IncomeComponent)
  }

  openModal_expense() {
    this.modalRef = this.modalService.show(ExpenseComponent)
  }
}
