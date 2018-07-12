import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../../services/apihandler.service';
import { SharedinfoService } from '../../services/sharedinfo.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser'


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  constructor(
    private router: Router, 
    public sharedInfo: SharedinfoService, 
    private apiHandler: ApihandlerService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('JDTA - Search');
  }

  // Pressing Enter while in input field
  // submits the value (equivalent to clicking the button)  
  onKey(event: any) {
    if(event.keyCode===13)
      this.onClick();
  }

  // Search button click
  onClick(){   
    this.apiHandler.loaded=false;  //Needed for when users clicks back and searches for a new term
    this.router.navigateByUrl('/search-results;term='+this.sharedInfo.searchTerm+'/1');    
  }

}
