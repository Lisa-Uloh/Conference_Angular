import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  monday:any;
  tuesday:any;
  wednesday:any;
  constructor(private schedule: ScheduleService) { }

  ngOnInit(): void {
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
