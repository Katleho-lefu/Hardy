import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  amount_entered:any = 0;
  total:any = 0;
  constructor() {}

  
Income(total_amount, added_amount){
  const result=total_amount+added_amount;
  // return result
  console.log(result); 
}


Expense(total_amount, withdrawal_amount){
  const result=total_amount-withdrawal_amount;
  // return result
  this.total = total_amount;
    console.log(result);
}


addSalary(current__amount:any)
{
  this.total = this.total + current__amount;
}



}
