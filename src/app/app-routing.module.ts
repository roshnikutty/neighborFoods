import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllMealsComponent } from './all-meals/all-meals.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MealMapComponent } from './meal-map/meal-map.component';
import { NewBuyerComponent } from './new-buyer/new-buyer.component';
import { NewMealComponent } from './new-meal/new-meal.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'all-meals', component: AllMealsComponent },
{ path: 'buyer-form', component: NewBuyerComponent },
{ path: 'map', component: MealMapComponent },
{ path: 'meal-form', component: NewMealComponent },
{ path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
