import { Injectable } from '@angular/core';
import { Income } from './income/income_interface';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  incomes: Income = {

    reason: "",
    added_amount : 0
  }

  amount_entered:any = 0;
  total:any = 0;
  constructor() {}

    // income = 200
    // expense = 400

// Total() {
//   let result = this.income + this.expense
//   return result;
//   console.log(result)
// }




// method for the money coming in
Income(incomes){

  localStorage.setItem('Incomes', JSON.stringify(incomes));

  const result = this.total + incomes;
  console.log(result);

}

// method for the money going out
Expense(total_amount, withdrawal_amount){
  const result=total_amount-withdrawal_amount;
  this.total = total_amount;
    console.log(result);
}


addSalary(current__amount:any)
{
  this.total = this.total + current__amount;
}



}
