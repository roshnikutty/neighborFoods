import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MapService } from '../services/map.service';

import { NewMeal } from '../new-meal/new-meal';

@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.css'],
  providers: [MapService]
})
export class AllMealsComponent implements OnInit {
  private meals: Array<NewMeal> = [];
  
  constructor(private router: Router) {
  }

  getMeals(): Array<NewMeal>{
    return this.meals;
  }

  addToCart(id: number): void {
    this.router.navigate(['/buyer-form']);
  }

  deleteMeal(id: number): void {
    this.meals.splice(id, 1);
    localStorage.setItem('mealsList', JSON.stringify(this.meals));
  }

  viewOnMap(id: number): void {
    const mealAddress:string = this.meals[id].sellAddress;
    //Pass meal pick up address through router
    this.router.navigateByUrl('/map', { state: { mealAddress } })
  }

  ngOnInit(): void {
    const allMeals = localStorage.getItem('mealsList');

    if(allMeals !== null) {
      this.meals = [...JSON.parse(allMeals)]
    }
  }

}
