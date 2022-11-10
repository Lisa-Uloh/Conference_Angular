import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { SpeakersService } from 'src/app/services/speakers.service';


@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speaker:any;

  constructor(private service: SpeakersService) { }

  ngOnInit(){
    this.service.getSpeakers().subscribe((response) => {
      this.speaker = response;
    });
  }

}
