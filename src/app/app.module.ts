import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewBuyerComponent } from './new-buyer/new-buyer.component';
import { NewMealComponent } from './new-meal/new-meal.component';

import { AppRoutingModule } from './app-routing.module';
import { AllMealsComponent } from './all-meals/all-meals.component';
import { MealMapComponent } from './meal-map/meal-map.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NewBuyerComponent,
    NewMealComponent,
    AllMealsComponent,
    MealMapComponent,
    ErrorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
