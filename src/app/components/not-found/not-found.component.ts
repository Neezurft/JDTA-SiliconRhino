import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../../services/apihandler.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private apiHandler : ApihandlerService, private router : Router) { }

  ngOnInit() {
  }

  onClick() {
    this.apiHandler.error=false;
    this.apiHandler.events=[];
    this.router.navigate(['/search']);
  }

}
