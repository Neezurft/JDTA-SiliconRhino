import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedinfoService {
  
  currentEvent: number = 1;
  searchTerm: string = '';

  constructor() { }
}
