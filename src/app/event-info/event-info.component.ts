import { Component, OnInit } from '@angular/core';
import { GetfromapiService } from '../getfromapi.service'
import { SharedinfoService } from '../sharedinfo.service'

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  constructor(private sharedInfo: SharedinfoService, private getFromApiService: GetfromapiService) { }

  ngOnInit() {
  }

  onClick() {
    this.sharedInfo.aux=!this.sharedInfo.aux;
  }
}
