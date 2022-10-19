import { Component, OnInit } from '@angular/core';
import { NewMeal } from './new-meal';

@Component({
  selector: 'new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
})
export class NewMealComponent implements OnInit {
	model: NewMeal;
	submitted: boolean;

  constructor() { 
    this.model = new NewMeal('', '', '', '', '', '', '', '', '', '');
    this.submitted = false;
}
  onSubmit() {
  	this.submitted = true;
    //Store new meal information in localStorage
    const storage = localStorage.getItem('mealsList');
    let localStorageMeals: Array<any>;
    if(storage === null) {
      localStorageMeals = [this.model];
    } else {
      localStorageMeals = [...JSON.parse(storage), this.model]
    }
    localStorage.setItem('mealsList', JSON.stringify(localStorageMeals));
  }

  ngOnInit(): void {
  }

}
