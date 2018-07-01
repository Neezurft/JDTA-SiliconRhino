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

  constructor(public sharedInfo: SharedinfoService, private getFromApi: GetfromapiService) { }

  ngOnInit() {
  }

  // Pressing Enter while in input field
  // submits the value (equivalent to clicking the button)  
  onKey(event: any) {
    if(event.keyCode===13)
      this.onClick();
  }

  onClick(){

    //Toggle to event info view.
    this.sharedInfo.currentEvent = 1;
    this.sharedInfo.showInfo=!this.sharedInfo.showInfo;
    this.getFromApi.loaded=false;
    
    //Added small delay to make transitions more subtle

    setTimeout(()=>{this.getFromApi.getEvent(this.inputText);},100);

    //Get Event details
          
    
  }

}
