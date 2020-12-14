import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'cards',
  templateUrl: './history-cards.component.html',
  styleUrls: ['./history-cards.component.scss']
})
export class HistoryCardsComponent implements OnInit {

  incomes: any = [];


  constructor(public calculator:CalculatorService) {

   console.log(this.calculator.get_incomes());
   this.incomes= this.calculator.get_incomes()
   
   }

  ngOnInit(): void {}

}
