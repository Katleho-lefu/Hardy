import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'cards',
  templateUrl: './history-cards.component.html',
  styleUrls: ['./history-cards.component.scss']
})
export class HistoryCardsComponent implements OnInit {

  test: any = []; 


  constructor(public calculator:CalculatorService) {
    // let transacations_income = this.calculator.get_incomes()

    console.log(this.calculator.get_incomes())

    this.test = this.calculator.get_incomes();
    
   }

  ngOnInit(): void {

     

  }



}
