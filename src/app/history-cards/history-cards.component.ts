import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'history-cards',
  templateUrl: './history-cards.component.html',
  styleUrls: ['./history-cards.component.scss']
})
export class HistoryCardsComponent implements OnInit {

  // incomes: any[] 
  data: any ;
  all_incomes: any[] =[];

  constructor(public calculator:CalculatorService) {

  // console.log(this.calculator.get_incomes());

  //  this.data = this.calculator.get_array();
  //  this.array.push(this.incomes);
  //  console.log(this.array);
  }


  ngOnInit(): void {
    
    this.all_incomes = this.calculator.get_incomes();
    console.log(this.all_incomes);
  }

}
