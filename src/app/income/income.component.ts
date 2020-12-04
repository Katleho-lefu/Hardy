import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  reason: any ="";
  total_amount: number = 5000
  added_amount: number = 0;

  constructor(public modalRef: MDBModalRef, public calculator: CalculatorService) {}

Income(){
    this.calculator.Income(this.total_amount, this.added_amount);
    this.modalRef.hide();
}

  ngOnInit(): void {
  }

}
