import { Component, OnInit } from '@angular/core';
import { GetfromapiService } from '../getfromapi.service'
import { SharedinfoService } from '../sharedinfo.service'

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  constructor(private sharedInfo: SharedinfoService, public getFromApi: GetfromapiService) { }

  ngOnInit() {
  }

  onClick() {
    this.sharedInfo.aux=!this.sharedInfo.aux;
    this.getFromApi.error=false;
  }  


  //Pagination controls
  
  changeEvent(i){
    this.sharedInfo.currentEvent=i+1;
  }

  decEvent(i){    
      this.sharedInfo.currentEvent--;
  }

  incEvent(i){    
      this.sharedInfo.currentEvent++;
  }
  
}
