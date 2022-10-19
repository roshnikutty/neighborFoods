export class NewBuyer {

    buyerId: string;
    buyerName: string;
    email: string;
    buyerMealid: string;
    dishName: string;
    plates: number;
    date: string;

   constructor(buyerId: string, buyerName: string, email: string, 
    buyerMealid: string, dishName: string, plates: number, date: string) {
       this.buyerId = buyerId;
       this.buyerName = buyerName;
       this.email = email;
       this.buyerMealid = buyerMealid;
       this.dishName = dishName;
       this.plates  = plates;
       this.date = date;
   }

}
