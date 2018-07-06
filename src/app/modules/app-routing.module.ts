import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { EventFormComponent }   from '../components/event-form/event-form.component';
import { EventInfoComponent }   from '../components/event-info/event-info.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { SearchResultComponent } from '../components/search-result/search-result.component'
 
const appRoutes: Routes = [  
    { path: 'search', component: EventFormComponent },
    { path: 'search-results', component: SearchResultComponent, 
        children: [ { path: ':result', component: EventInfoComponent } ]
    },    
    { path: 'event/:id', component: EventInfoComponent },    
    { path: '',   redirectTo: '/search', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}