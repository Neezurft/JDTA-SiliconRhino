import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedinfoService {

  aux : boolean = false;
  currentEvent: number = 1;

  constructor() { }
}
