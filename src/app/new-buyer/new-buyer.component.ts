import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewBuyer } from './new-buyer';
import { NewMeal } from '../new-meal/new-meal';

@Component({
  selector: 'new-buyer',
  templateUrl: './new-buyer.component.html',
  styleUrls: ['./new-buyer.component.css']
})
export class NewBuyerComponent implements OnInit {
	model: NewBuyer;
	submitted: boolean;

  constructor(private router: Router) { 
    this.model = new NewBuyer('', '', '', '', '', 0, '');
    this.submitted = false;
}

  //When a buyer buys a meal, deduct the plates in the plate count of the meal, 
  //or remove it from meal listing if all the meal plates are bought out
  updateMealCount(mealIdBought: string, platesBought: number): void {
    const allMeals = localStorage.getItem('mealsList');

    if (allMeals != null) {
      const meals = JSON.parse(allMeals);
      const index = meals.findIndex((meal: NewMeal) =>  {
        return meal.mealid === mealIdBought;
      })

      if (index === -1) {
        const errorMessage = "Meal does not exist, please check meal Id in the 'all meals' page"
        this.router.navigateByUrl('/error', { state: { errorMessage }});
        return;
      }
      
      let sellPlateCount: number = parseInt(meals[index].sellPlateCount, 10)

      if (sellPlateCount > platesBought) {
        sellPlateCount = sellPlateCount - platesBought;
        meals[index].sellPlateCount = sellPlateCount;
        
        localStorage.setItem('mealsList', JSON.stringify(meals));

      } else if (sellPlateCount === platesBought) {
        meals.splice(index, 1);

        localStorage.setItem('mealsList', JSON.stringify(meals));
      } else {
        const errorMessage:string = 'Cannot buy more plates than those available for sale, please re-enter your information in the buyer form';
        this.router.navigateByUrl('/error', { state: { errorMessage }});
        this.submitted = false;
        return;
      }
    }

  }

  onSubmit(): void {
    this.updateMealCount(this.model.buyerMealid, this.model.plates);
  	this.submitted = true;
    //Store buyer information only if meal update was successful
    //buyer information in localStorage
    const storage = localStorage.getItem('buyersList');
    let localStorageBuyers: Array<any>;
    if(storage === null) {
      localStorageBuyers = [this.model];
    } else {
      localStorageBuyers = [...JSON.parse(storage), this.model]
    }
    localStorage.setItem('buyersList', JSON.stringify(localStorageBuyers));
  }

  ngOnInit(): void { }

}
