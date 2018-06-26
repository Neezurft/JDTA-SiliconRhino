import { Component, OnInit } from '@angular/core';
import { GetfromapiService } from '../getfromapi.service';
import { SharedinfoService } from '../sharedinfo.service';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  inputId : string;

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

      this.getFromApi.getEvent(this.inputId);
      //Tell the app to show the info and not the form
      this.sharedInfo.aux=!this.sharedInfo.aux;
  }

}
