import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { ContentfulService } from './contentful.service';
import { SpeakersService } from './services/speakers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConferenceApp';
  speaker:any;

  constructor(private service: SpeakersService) { }

  ngOnInit(): void {
    this.service.getSpeakers().subscribe(response => {
      this.speaker = response;
    });
  }
  
}
