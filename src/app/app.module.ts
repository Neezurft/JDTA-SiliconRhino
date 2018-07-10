import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventInfoComponent } from './components/event-info/event-info.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    EventInfoComponent,
    NotFoundComponent,
    SearchResultComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//TODO - Improve pagination behaviour