import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { CalculatorService } from '../calculator.service';
import { Income } from '../income/income_interface';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

incomes: Income = {

  reason: "",
  added_amount : 0
}
  

  constructor(public modalRef: MDBModalRef, public calculator: CalculatorService) {}


Income(){
  if(this.incomes.reason && this.incomes.added_amount){

    this.calculator.Income(this.incomes)
    this.calculator.addSalary(this.incomes.added_amount)
    this.modalRef.hide();

  }

  else{
    alert(" all fields are required ");
  }

}

  ngOnInit(): void {
  }
}
