import { Component, OnInit } from '@angular/core';
import { GetfromapiService } from '../../services/getfromapi.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private getFromApi : GetfromapiService, private router : Router) { }

  ngOnInit() {
  }

  onClick() {
    this.getFromApi.error=false;
    this.getFromApi.events=[];
    this.router.navigate(['/search']);
  }

}
