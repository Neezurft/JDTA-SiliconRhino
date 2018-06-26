import { Component, OnInit } from '@angular/core';
import { GetfromapiService } from '../getfromapi.service';
import { SharedinfoService } from '../sharedinfo.service';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  inputId : number;

  constructor(private sharedInfo: SharedinfoService, private getFromApi: GetfromapiService) { }

  ngOnInit() {
  }

  onClick(){
      this.sharedInfo.id = this.inputId;
      
      this.sharedInfo.aux=!this.sharedInfo.aux;
  }

}
