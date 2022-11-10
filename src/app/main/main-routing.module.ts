import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';

const routes: Routes = [
  {path:'main/home', component: HomeComponent},
  {path:'main/:speakerId/home', component:HomeComponent},
  {path:'speakers', component: SpeakersComponent},
  {path:'schedule', component: ScheduleComponent},
  {path:'location', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
