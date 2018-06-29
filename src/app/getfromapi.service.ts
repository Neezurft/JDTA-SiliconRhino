import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GetfromapiService {

  events: Event[] = new Array();
  error: boolean = false;
  loaded : boolean = false;
  loading: boolean = false;

  url = 'https://mock-api.drinks.test.siliconrhino.io/events?';

  constructor(private http: HttpClient) { }

  getEvent(term) {

      this.http.get<Event[]>(this.url+"page="+"1"+"&pageSize="+"10"+"&search="+term).subscribe(
        (data: Event[]) => this.successHandling(data),
        error => this.errorHandling()
      );   
    
  }

  successHandling(data){
    this.events = data
    this.loaded = true;
  }
  
  errorHandling(){
    this.error = true;
    this.loaded = true;
  }

}