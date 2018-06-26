import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class GetfromapiService {

  event: Event;

  url = 'https://mock-api.drinks.test.siliconrhino.io/events/';

  constructor(private http: HttpClient) { }

  getEvent(id) {

    this.http.get<Event>(this.url+id).subscribe(
      (data: Event) => this.event = data
    );

  }
}
