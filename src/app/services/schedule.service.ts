import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { MonSchedule } from '../model/mon-schedule';
import { TuesSchedule } from '../model/tues-schedule';
import { WedSchedule } from '../model/wed-schedule';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends BaseService {

  constructor(http: HttpClient) {
    super(http)
   }
   monday(): Observable<MonSchedule[]>{
    return this.http.get<MonSchedule[]>(this.getURI('monSchedules')).pipe(catchError(this.handleError));
   }

   tuesday(): Observable<TuesSchedule[]>{
    return this.http.get<TuesSchedule[]>(this.getURI('tueSchedules')).pipe(catchError(this.handleError));
   }

   wednesday(): Observable<WedSchedule[]>{
    return this.http.get<WedSchedule[]>(this.getURI('wedSchedules')).pipe(catchError(this.handleError));
   }
  
}
