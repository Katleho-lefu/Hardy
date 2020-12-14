import { Injectable } from '@angular/core';
import { Income } from './income/income_interface';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  array = [];
  incomes: Income = {

    reason: "",
    added_amount : 0
  }

  amount_entered:any = 0;
  total:any = 1000;
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

  this.array.push(this.incomes);

  localStorage.setItem('Incomes', JSON.stringify(incomes));
  const result = this.total + incomes.added_amount;
  console.log(result);
  this.get_array();
}

get_incomes(){
  let transacations_income = JSON.parse(localStorage.getItem('Incomes'));
  return transacations_income;
}

get_array(){
  // return this.array;
  console.log(this.array);
}

// method for the money going out
Expense(total_amount, withdrawal_amount){
  const result=total_amount-withdrawal_amount;
  this.total = total_amount;
}


addSalary(current__amount:any)

{
  this.total = this.total + current__amount;
}

}