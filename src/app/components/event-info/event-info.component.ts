import { Component, OnInit } from '@angular/core';
import { GetfromapiService } from '../../services/getfromapi.service'
import { SharedinfoService } from '../../services/sharedinfo.service'
import { ElementRef } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators';
import { Event } from '../../interfaces/event';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  event: Event;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private hostElement: ElementRef,
    public sharedInfo: SharedinfoService,
    public getFromApi: GetfromapiService) { }

  ngOnInit() {

    // This component is instantiated in two scenarios:
    // 1 For viewing an event's info after a search (code within else clause below)
    // 2 For a single event view, when navigating to the event's unique url (code within the if clause below)

    // On the second scenario, the event-component is meant to be reused, therefore the
    // route parameters are gotten through a subscription.
    // For the first scenario the snapshot short approach is enough though.
    if(this.route.routeConfig.path=="event/:id"){

      //The subscription below is made in order to catch the possibility
      //of a wrong url introduced by user
      this.getFromApi.getEventById(this.route.snapshot.paramMap.get('id'))
        .subscribe( 
          (event) => {this.event=event; this.getFromApi.loaded=true;},
          () => {this.router.navigate(['/not-found']); this.getFromApi.loaded=true;}
        );

    }else{

      this.route.paramMap.pipe( 
        switchMap( (params: ParamMap) => params.get('result') )
      ).subscribe( 
        (result) => {
          this.event=this.getFromApi.events[+result-1];
          if(this.event==null)
            this.router.navigate(['/not-found']);
        }
      );

    }   
    
  }

  //Generates the appropiate image url
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

  //Generates the embedded google map view link 
  googleMapLink(lat,lon):string{
    return "https://maps.google.com/maps?q="+lat+","+lon+"&output=embed";
  }

  // So... Aparently there is a bug in Angular that doesn't allow
  // data binding to the src attribute of an iframe, so this little trick
  // below is a workaround.
  iFrameSrc(lat,lon){
    this.hostElement.nativeElement.querySelector('#gMap').contentWindow.location.replace(
      this.googleMapLink(lat,lon)
    );
  }
  
}
