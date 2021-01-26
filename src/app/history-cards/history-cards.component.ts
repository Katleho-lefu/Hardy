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

  constructor(public calculator:CalculatorService) {}


  delete_item(i){
    console.log(i);
    this.calculator.delete_item(i)
  }

  ngOnInit(): void {
    
    this.all_incomes = this.calculator.get_incomes();
    console.log(this.all_incomes);
  }

}
