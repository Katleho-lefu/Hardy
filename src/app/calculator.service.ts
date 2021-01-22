import { Injectable } from '@angular/core';
import { Income } from './income/income_interface';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  incomes: Income = {

    description: "",
    added_amount: 0
  }

  arr_incomes: Income[] = [this.incomes]

  amount_entered: any = 0;
  total: any = 50000;

  constructor() { }

  // income = 200
  // expense = 400

  // Total() {
  //   let result = this.income + this.expense
  //   return result;
  //   console.log(result)
  // }






  //method for the money coming in
  Income(incomes): void{
    let arrIncome: any[] = [];
    arrIncome.push(incomes)
    console.log(arrIncome);
    localStorage.setItem('Incomes', JSON.stringify(arrIncome));
   
  }

  //bring back income transactions from local storage
  get_incomes(): any[] {
    // let Income: any[] = [];
    let incomes = JSON.parse(localStorage.getItem('Incomes'));
    // Income.push(incomes)
    return incomes;
  }


  //method for the money going out
  Expense(total_amount, withdrawal_amount) {
    const result = total_amount - withdrawal_amount;
    this.total = total_amount;
  }


  addSalary(current__amount: any) {
    this.total = this.total + current__amount;
  }

}