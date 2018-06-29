import { Component, OnInit } from '@angular/core';
import { GetfromapiService } from '../getfromapi.service';
import { SharedinfoService } from '../sharedinfo.service';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  inputText: string = '';

  constructor(private sharedInfo: SharedinfoService, private getFromApi: GetfromapiService) { }

  ngOnInit() {
  }

  // Pressing Enter while in input field
  // submits the value (equivalent to clicking the button)  
  onKey(event: any) {
    if(event.keyCode===13)
      this.onClick();
  }

  onClick(){
    //let start; TODO remove the delay stuff
    //let milliseconds;

    //Toggle to event info view.
    this.sharedInfo.currentEvent = 1;
    this.sharedInfo.showInfo=!this.sharedInfo.showInfo;

    //Delay    
    // start = new Date().getTime();
    // milliseconds = 0;
    // for(let i=0;i<1e7;i++)
    // {
    //   if((new Date().getTime() - start) > milliseconds) 
    //     break;
    // }

    //Get Event details
    this.getFromApi.getEvent(this.inputText);      
    
  }

}
