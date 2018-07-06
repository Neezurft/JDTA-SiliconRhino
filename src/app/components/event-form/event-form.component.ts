import { Component, OnInit } from '@angular/core';
import { GetfromapiService } from '../../services/getfromapi.service';
import { SharedinfoService } from '../../services/sharedinfo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  constructor(private router: Router, public sharedInfo: SharedinfoService, private getFromApi: GetfromapiService) { }

  ngOnInit() {
  }

  // Pressing Enter while in input field
  // submits the value (equivalent to clicking the button)  
  onKey(event: any) {
    if(event.keyCode===13)
      this.onClick();
  }

  // Search button click
  onClick(){   
    this.getFromApi.loaded=false;  //Needed for when users clicks back and searches for a new term
    this.router.navigateByUrl('/search-results;term='+this.sharedInfo.searchTerm+'/1');    
  }

}
