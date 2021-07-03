import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OpenviduSessionModule } from 'openvidu-angular';
import { LiveComponent } from './live/live.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    OpenviduSessionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
