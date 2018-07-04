import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../interfaces/event';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GetfromapiService {

  events: Event[] = new Array();
  error: boolean = false;
  loaded : boolean = false;
  page: number = 1;
  term: string = '';

  url = 'https://mock-api.drinks.test.siliconrhino.io/events?';

  constructor(private http: HttpClient) { }

  // Trigers an asynchronous iterative process: 
  // this.page is the index and should be initialisated to 1.
  // When the asynchronous request finishes, this.successHandling()
  // will trigger the following iterations until an empty array
  // is returned (no more events to load).
  getEvent(term) {

      this.getEventPage(term,this.page);
      this.term=term;   
  }

  // Requests to the mock-api server a page of 3 events 
  // to be pushed into the this.events array by
  // this.successHandling()
  getEventPage(term,page) {
    this.http.get<Event[]>(this.url+"page="+page+"&pageSize="+"3"+"&search="+term).subscribe(
      (data: Event[]) => this.successHandling(data),
      (error) => this.errorHandling()
    );     
}

  // Either finishes the asynchronous iterative process
  // of loading of events when the returned page is empty,
  // or pushes the events that were loaded into the this.events array
  // and triggers another iteration calling this.getEventPage()
  successHandling(data){
    if(data.length==0)
    {      
      this.loaded = true; 
      this.page = 1;  
      this.term = ''; 
    }else{
      Array.prototype.push.apply(this.events,data)
      this.page++;
      this.getEventPage(this.term,this.page);
    }
    
  }
  
  //Reset the relevant properties and sets the this.error flag to true
  errorHandling(){
    this.error = true;
    this.loaded = true;
    this.page = 1; 
    this.term = '';
  }

}