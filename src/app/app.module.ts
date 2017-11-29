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
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PropositionService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
