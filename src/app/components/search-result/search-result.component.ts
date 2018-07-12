import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../../services/apihandler.service'
import { SharedinfoService } from '../../services/sharedinfo.service'
import { ElementRef } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  term;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hostElement: ElementRef,
    public sharedInfo: SharedinfoService,
    public apiHandler: ApihandlerService,
    private titleService: Title
  ) { }

  ngOnInit() {
    
    this.titleService.setTitle('JDTA - Search Results');

    // Route parameters are gotten from a snapshot because the
    // search-result-component isn't meant to be re-used.
    // In the case of event-info-component parameters are gotten
    // from a subscription.
    this.sharedInfo.searchTerm = this.route.snapshot.paramMap.get('term');
    if(this.route.firstChild==null){
      this.router.navigateByUrl('/search-results;term='+this.sharedInfo.searchTerm+'/1');  
    }else{
      this.sharedInfo.currentEvent = +this.route.firstChild.snapshot.paramMap.get('result');  
    }      

    this.apiHandler.getEvent(this.sharedInfo.searchTerm);
  }

  // On Click Event for the Go Back Buttton
  // The relevant properties are reset
  onClick() {
    this.apiHandler.error=false;
    this.apiHandler.events=[];
    this.router.navigate(['/search']);
  }  

  //Pagination control functions  
  changeEvent(i){    
    this.sharedInfo.currentEvent=i+1;
    this.router.navigate(['./'+this.sharedInfo.currentEvent], {relativeTo: this.route});
    window.scrollTo(0,0);
  }

  decEvent(i){    
    this.sharedInfo.currentEvent--;
    this.router.navigate(['./'+this.sharedInfo.currentEvent], {relativeTo: this.route});
    window.scrollTo(0,0);
  }

  incEvent(i){    
    this.sharedInfo.currentEvent++;
    this.router.navigate(['./'+this.sharedInfo.currentEvent], {relativeTo: this.route});
    window.scrollTo(0,0);
  }

}
