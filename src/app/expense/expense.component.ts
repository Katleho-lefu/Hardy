import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  reason: any = "";
  total_amount: number = 5000
  added_amount: number = 0;

  constructor(public modalRef: MDBModalRef, public calculator: CalculatorService) {}

  Expense(){
    this.calculator.Expense(this.total_amount, this.added_amount);
    this.modalRef.hide();
  }

  ngOnInit(): void {
  }

}
