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
    this.sharedInfo.showInfo=!this.sharedInfo.showInfo;
    this.getFromApi.error=false;
    this.getFromApi.loaded=false;
  }  

  imgUrl(type: string): string{
    
    let iUrl: string;

    switch(type){

      case 'BEERS':
        iUrl='/assets/beer-icon.png';
      break;

      case 'COCKTAILS':
        iUrl='/assets/cocktail-icon.png';
      break;

      case 'COFFEES':
        iUrl='/assets/coffee-icon.png';
      break;

      case 'MILKSHAKES':
        iUrl='/assets/milkshake-icon.png';
      break;

    }
    return iUrl;
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

  googleMapLink(lat,lon):string{

    return "https://www.google.com/maps/?q="+lat+","+lon;

  }
  
}
