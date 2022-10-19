# NeighborFoods

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4. 
- It uses FormsModule to render and register New meal and New buyer information
RouterModule, Routes to display pages within the app
- Local Storage for persisting list of Meals and Buyers

Who is this app for? 
-  a busy professional who gets home late from work
-  a new parent
-  busy chaperoning kids to soccer after you get back from work
-  just interested in trying various cuisines, and getting to know your neighbors

You can now buy lunch or dinner plates from your neighbors and have a home-cooked meal experience every day of your busy week!
Get Started
- Check out the meal listings in NeighborFood app, check on map the distance to the meal pick up address and add to your cart.
- If you want to sell your meal, fill the new meal form with descriptions of your meal
- If you want to buy a delicious meal, fill the buyer form and the meal will be ready for pick up!

## Angular components

- Home - Provides details on the app problem statement and its need
- All-meals - lists all meals with their description that are available for sale. For each meal, delete meal listing or get location to this meal’s pick up address using ’View on Map’ button
- New-meal - template form component used by seller to provide meal information, with form validation
- New-buyer - template form component used by buyer to provide their information
- Meal-map - provides directions and time from a location to another using MapQuest API
- Error -  This is a component that displays error message dynamically. 

	*  In this app the router routes to /error, and this component displays an error message when the buyer adds more plates in the buyer form while buying a meal
	*  When the buyer enters a meal Id that does not exist, a customized error message is thrown


## Routes

- / - Displays app problem statement and solution
- /all-meals -
Both these paths route to the page that lists all the meals available. A link on the icon in the top left also brings you this page
- /buyer-form -
		Gets to the buyer form
- /meal-form -
		Gets to the meal entry form

## Template Form validation
The new-meal form component has these validations
Price > $0
Check on email formats
Check on date formats

No validation is implemeted on the new-buyer form component, this will be in version 2 of this application, coming in the near future

## External service

MapQuest API to get directions from one location to another
This is an injectable service in the app at src/app/services/map.service.ts
- Use case 1: From the /all-meals page route, when you click ‘view on map’ button, the ‘to’ location is picked as the meal pickup address. The ‘from’ location is ‘Boston, MA’ by default
- Use case 2: Navigate to the /map page route. Here you can manually enter to and from input values


# Not implemented in this app, upcoming in version 2 of this app 
1. Buyer and seller logins and tying them to their meals
2. Buyer form validation


# Run this app
1. in the root folder, install the dependencies using 
```
npm install
```
2. then run the app using
```
ng serve
```
