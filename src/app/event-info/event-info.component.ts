import { Component, OnInit } from '@angular/core';
import { GetfromapiService } from '../getfromapi.service'
import { SharedinfoService } from '../sharedinfo.service'
import { ElementRef } from '@angular/core'

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  constructor(private hostElement: ElementRef, public sharedInfo: SharedinfoService, public getFromApi: GetfromapiService) { }

  ngOnInit() {
  }

  onClick() {
    this.sharedInfo.showInfo=!this.sharedInfo.showInfo;
    this.getFromApi.error=false;
    this.getFromApi.events=[];
  }  

  imgUrl(type: string): string{
    
    let iUrl: string;

    switch(type){

      case 'BEERS':
        iUrl='./assets/beer-icon.png';
      break;

      case 'COCKTAILS':
        iUrl='./assets/cocktail-icon.png';
      break;

      case 'COFFEES':
        iUrl='./assets/coffee-icon.png';
      break;

      case 'MILKSHAKES':
        iUrl='./assets/milkshake-icon.png';
      break;

    }
    return iUrl;
  }

  //Pagination controls
  
  changeEvent(i){
    this.sharedInfo.currentEvent=i+1;
   // this.hideMapView();
  }

  decEvent(i){    
    this.sharedInfo.currentEvent--;
   // this.hideMapView();
  }

  incEvent(i){    
    this.sharedInfo.currentEvent++;
   // this.hideMapView();
  }

  googleMapLink(lat,lon):string{

    return "https://maps.google.com/maps?q="+lat+","+lon+"&output=embed";
  }

  toggleMapView(){

    this.hostElement.nativeElement.querySelector('iFrame').hidden=!this.hostElement.nativeElement.querySelector('iFrame').hidden;
  }

  // hideMapView(){

  //   this.hostElement.nativeElement.querySelector('iFrame').hidden=true;
  // }

  // So... Aparently there is a bug in Angular that doesn't allow
  // data binding to the src attribute of an iframe, so this little trick
  // below is a workaround.
  iFrameSrc(lat,lon){
    this.hostElement.nativeElement.querySelector('iFrame').src=this.googleMapLink(lat,lon);
  }
  
}
