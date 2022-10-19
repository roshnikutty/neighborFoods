import { Component, OnInit } from '@angular/core';
import { Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { MapService } from '../services/map.service';
import { Map } from './map';

@Component({
  selector: 'app-meal-map',
  templateUrl: './meal-map.component.html',
  styleUrls: ['./meal-map.component.css'],
  providers: [MapService]
})

export class MealMapComponent implements OnInit {
  map: Map = new Map('Boston, Ma', '');
  directions: any[] | undefined;
  distance: number = 0;
  formattedTime: string = '';

  // a subject to publish 'to' and 'from' terms
  toTerms: Subject<string>;
  fromTerms: Subject<string> ;

  constructor(private mapquestDataService: MapService) {
    this.toTerms = new Subject<string>();
    this.fromTerms = new Subject<string>();
  }

  getTo(toTerm: string): void {
	  this.toTerms.next(toTerm);
	}
  
  getFrom(fromTerm: string): void {
	  this.fromTerms.next(fromTerm);
	}

  getMapDirections(from:string='', to:string=''):void {
    if(!this.map.to) {
      console.log("please enter 'to' locations");
      return;
    }
    
    this.mapquestDataService
      .getDirections(this.map.from, this.map.to)
      .subscribe(result => {

        //Check if the data exists before assigning it to class instance variables
        if (result?.route?.legs[0]?.maneuvers.length > 0 
          && result?.route?.distance 
          && result?.route?.formattedTime) {
            this.directions = result.route.legs[0].maneuvers;
            this.distance = result.route.distance;
            this.formattedTime = result.route.formattedTime;
        } else {
          console.error('Error! We did not get any results for your search');
        }
      })

  }

  ngOnInit(): void {
    //When a user loads Map from all-meals page
    //Get Meal pick up address from history, passed in by router
    const mealAddress = history.state?.mealAddress;
    if (mealAddress) {
      this.map.from = 'Boston, MA'
      this.map.to = mealAddress;
      this.getMapDirections(this.map.from, this.map.to);
    }

    this.toTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      switchMap((toTerm: string) => {
        return this.map.to = toTerm;
      })
    )
    .subscribe((result:any)=> {
      this.getMapDirections(result, this.map.to);
    });

    this.fromTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((fromTerm: string) => {
        return this.map.from = fromTerm;
      })
    )
    .subscribe((result:any)=> {
      this.getMapDirections(this.map.from, result);
    });

  }
}
