import { Component, OnInit } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {OpenviduSessionComponent, StreamEvent, Session, UserModel, OpenViduLayout, OvSettings, OpenViduLayoutOptions, SessionDisconnectedEvent, Publisher} from 'openvidu-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
  }
}
