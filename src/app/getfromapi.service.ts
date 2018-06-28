import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class GetfromapiService {

  events: Event[] = new Array();
  error: boolean = false;

  url = 'https://mock-api.drinks.test.siliconrhino.io/events?';

  constructor(private http: HttpClient) { }

  getEvent(term) {

      this.http.get<Event[]>(this.url+"page="+"1"+"&pageSize="+"10"+"&search="+term).subscribe(
        (data: Event[]) => this.events = data,
        error => this.error=true
      );   
    
  }

}