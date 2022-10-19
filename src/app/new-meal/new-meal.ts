export class NewMeal {

    mealid: string;
    foodName: string;
    sellerName: string;
    sellCuisine: string;
    sellDate: string;
    sellPlateCount: string;
    sellAddress: string;
    sellAllergens: string;
    sellerEmail: string;
    price: string;

   constructor(mealid: string, foodName: string, sellerName: string, 
    sellCuisine: string, sellDate: string, sellPlateCount: string, 
    sellAddress: string, sellAllergens: string, sellerEmail: string, price: string) {
       this.mealid = mealid;
       this.foodName = foodName;
       this.sellerName = sellerName;
       this.sellCuisine = sellCuisine;
       this.sellDate = sellDate;
       this.sellPlateCount = sellPlateCount;
       this.sellAddress = sellAddress;
       this.sellAllergens = sellAllergens;
       this.sellerEmail = sellerEmail;
       this.price = price;
   }

}
