import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { SpeakersService } from 'src/app/services/speakers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  speaker:any;
  monday:any;
  tuesday:any;
  wednesday:any;

  constructor(private service: SpeakersService, private schedule: ScheduleService) { }

  ngOnInit(){
    this.service.getSpeakers().subscribe(response => {
      this.speaker = response;
    });

    this.schedule.monday().subscribe(response =>{
      this.monday = response;
    })
    
    this.schedule.tuesday().subscribe(response =>{
      this.tuesday = response;
    })

    this.schedule.wednesday().subscribe(response =>{
      this.wednesday = response;
    })
  }

}
