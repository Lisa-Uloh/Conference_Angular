import { Component, OnInit } from '@angular/core';
import { SpeakersService } from 'src/app/services/speakers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  speaker:any;

  constructor(private service: SpeakersService) { }

  ngOnInit(){
    this.service.getSpeakers().subscribe(response => {
      this.speaker = response;
    });
  }

}
