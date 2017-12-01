import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropositionsComponent } from './propositions/propositions.component';
import { PropositionDetailComponent } from './proposition-detail/proposition-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { PropositionService } from './proposition.service';
import { MessageService } from './message.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PropositionsComponent,
    PropositionDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, apiBase: 'api/v1/' }
    )
  ],
  providers: [
    PropositionService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
