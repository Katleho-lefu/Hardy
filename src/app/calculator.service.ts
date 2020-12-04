import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { 

    const transactions = {
      
    }


  }


Income(total_amount, added_amount){

  const result=total_amount+added_amount;
  // return result
  console.log(result);
}


Expense(total_amount, withdrawal_amount){

  const result=total_amount-withdrawal_amount;
  // return result
  console.log(result);
}



}
