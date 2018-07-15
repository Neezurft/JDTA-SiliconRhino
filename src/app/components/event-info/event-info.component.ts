import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../../services/apihandler.service'
import { SharedinfoService } from '../../services/sharedinfo.service'
import { ElementRef } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators';
import { Event } from '../../interfaces/event';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  event: Event;
  mapLoaded = false;
  notLogged: boolean = true;
  attempLog: boolean = false;
  logingIn: boolean = false;
  loggedIn: boolean = false;
  comment: string = '';
  username: string = '';
  userImgUrl: string = '';
  password: string = '';

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private hostElement: ElementRef,
    public sharedInfo: SharedinfoService,
    public apiHandler: ApihandlerService,
    private titleService: Title
  ) { }

  ngOnInit() {

    // This component is instantiated in two scenarios:
    // 1 For viewing an event's info after a search (code within else clause below)
    // 2 For a single event view, when navigating to the event's unique url (code within the if clause below)

    // On the second scenario, the event-component is meant to be reused, therefore the
    // route parameters are gotten through a subscription.
    // For the first scenario the snapshot short approach is enough though.
    if(this.route.routeConfig.path=="event/:id"){

      this.titleService.setTitle("JDTA - Event's Info");

      //The subscription below is made in order to catch the possibility
      //of a wrong url introduced by user
      this.apiHandler.getEventById(this.route.snapshot.paramMap.get('id'))
        .subscribe( 
          (event) => {
            if(event==null)
              // In case the returned event is empty i.e. does not exists
              this.router.navigate(['/not-found']);
            else
            {
              this.event=event;
              this.apiHandler.loaded=true;
            } 
          },
          () => {
            this.router.navigate(['/not-found']);
          }
        );

    }else{

      this.route.paramMap.pipe( 
        switchMap( (params: ParamMap) => params.get('result') )
      ).subscribe( 
        (result) => {
          this.mapLoaded=false;
          this.event=this.apiHandler.events[+result-1];
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
    if(!this.mapLoaded){
      this.hostElement.nativeElement.querySelector('#gMap').contentWindow.location.replace(
        this.googleMapLink(lat,lon)
      );
      this.mapLoaded=true;
    }    
  }

  dispLoginForm(){
    this.attempLog=true;
    window.setTimeout(function() {
      document.getElementById("usernameField").focus();
    },50);    
  }

  attempLogin(){
    this.logingIn=true;
    window.setTimeout( ()=>{   
      this.apiHandler.verifyUser(this.username,this.password)
      .subscribe((res) => {
        if(res.valid){
          this.logingIn=false;
          this.attempLog=false;
          this.loggedIn=true;
          this.password='';
          this.userImgUrl=res.url;
        }
        else{
          this.password='';
          this.logingIn=false;
          this.attempLog=true; 
          window.setTimeout(function() {
            document.getElementById("passField").focus();
            document.getElementById("tooltipelem").style.visibility="visible";
            document.getElementById("tooltipelem").style.opacity="0";
          },50);         
        }
      },() =>{
        this.password='';
        this.logingIn=false;
        this.attempLog=true;
        window.setTimeout(function() {
          document.getElementById("passField").focus();
          document.getElementById("tooltipelem").style.visibility="visible";
          document.getElementById("tooltipelem").style.opacity="0";
        },50);    
      });
    },200);
  }

  logout(){
    this.loggedIn=false;  
  }

  addComment(){
    this.apiHandler.addComment(this.event.id,this.comment,Date.now(),this.username,this.userImgUrl).subscribe(
      () => {
        this.apiHandler.getEventById(this.event.id).subscribe( (event) => {
          if(event!=null)
            this.event=event;
        });
      }
    );    
  }

  deleteComment(commentNumber){
    this.apiHandler.deleteComment(this.event.id,commentNumber).subscribe(
      () => {
        this.apiHandler.getEventById(this.event.id).subscribe( (event) => {
          if(event!=null)
            this.event=event;
        });
      }
    );
  }

  onKey(event: any) {
    if(event.keyCode===13 && this.comment!=''){
      this.addComment();
      this.comment='';
    }
      
  }
  
}
