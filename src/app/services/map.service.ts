import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private MAPQUEST_URL: string = 'http://www.mapquestapi.com/directions/v2/route'
  private KEY: string = '<API_KEY>';
  constructor(private http: HttpClient) { }

  getDirections(from: string, to: string):Observable<any> {
    let url: string = `${this.MAPQUEST_URL}?key=${this.KEY}&from=${from}&to=${to}`;
      
    return this.http.get(url)
  }
}
