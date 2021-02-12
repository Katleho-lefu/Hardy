import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  Income(incomes): void {
    if (localStorage.getItem('Incomes') == null) {
      let arrIncome: any[] = [];
      arrIncome.push(incomes)
      localStorage.setItem('Incomes', JSON.stringify(arrIncome));
    }
    /* *  Bringing back the existing Incomes to add new incomes into them 
       * assign the existing Incomes to an array **/
    else {
      let arrIncome: any[] = JSON.parse(localStorage.getItem('Incomes'));
      arrIncome.push(incomes);
      localStorage.setItem('Incomes', JSON.stringify(arrIncome));
    }
  }


  //bring back income transactions from local storage
  get_incomes(): any[] {
    let incomes = JSON.parse(localStorage.getItem('Incomes'));
   // location.reload();
    return incomes;
  }


  //method for the money going out
  Expense(total_amount, withdrawal_amount) {
    const result = total_amount - withdrawal_amount;
    this.total = total_amount;
  }


// Method to delete an item in localstorage
  async delete_item(id): Promise<any> {
    return new Promise((resolve, reject) => {
      const incomes: any[] = this.get_incomes()
      for(var x= 0; x<incomes.length; x++){
        const index = incomes.findIndex(id => incomes == id);
        incomes.splice(id, 1);
      }
      localStorage.setItem('Incomes', JSON.stringify(incomes));
      resolve(incomes)
    }).catch(err => {
      console.log(err.message);
    })

    
  }

  
  
  
  
  
  
  
  
  }

