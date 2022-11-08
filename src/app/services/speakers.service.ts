import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Speakers } from '../model/speakers';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService extends BaseService {

  constructor(http: HttpClient) {
    super(http)
   }

   getSpeakers(): Observable<Speakers[]>{
    return this.http.get<Speakers[]>(this.getURI('speakers')).pipe(catchError(this.handleError));
   }

   getSpeaker(id:number) : Observable<Speakers>{
    return this.http.get<Speakers>(`http://localhost:3000/speakers/${id}`).pipe(catchError(this.handleError));
   }
}
