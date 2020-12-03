import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './history-cards.component.html',
  styleUrls: ['./history-cards.component.scss']
})
export class HistoryCardsComponent implements OnInit {

amount="500"

  constructor() { }

  ngOnInit(): void {
  }

}
