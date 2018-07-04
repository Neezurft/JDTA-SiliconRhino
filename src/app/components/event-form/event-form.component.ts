import { Component, OnInit } from '@angular/core';
import { GetfromapiService } from '../../services/getfromapi.service';
import { SharedinfoService } from '../../services/sharedinfo.service';


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

  // Search button click
  onClick(){

    //Toggle to event info view.
    this.sharedInfo.showInfo=!this.sharedInfo.showInfo;
    this.sharedInfo.currentEvent = 1;    
    this.getFromApi.loaded=false;
    
    //Added small delay to make transitions more subtle
    //Get Event details
    setTimeout(()=>{this.getFromApi.getEvent(this.inputText);},100);    
  }

}
