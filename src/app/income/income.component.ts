import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  input_reason="";
  input_amount="";
   
  constructor(public modalRef: MDBModalRef) {}



  ngOnInit(): void {
  }

}
