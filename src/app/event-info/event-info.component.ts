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

    //TODO Part of the map preview fix
    //return "https://maps.google.com/maps?width=100%&height=600&hl=en&coord=51.517608,-0.127625&q=Malet%20St%2C%20London%20WC1E%207HU%2C%20United%20Kingdom+(Your%20Business%20Name)&ie=UTF8&t=&z=18&iwloc=B&output=embed";
    return "https://www.google.com/maps/?q="+lat+","+lon;

  }
  
}
