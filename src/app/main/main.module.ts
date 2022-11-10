import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { COCComponent } from './coc/coc.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    HomeComponent,
    SpeakersComponent,
    ScheduleComponent,
    COCComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
