import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Errormodel } from '../model/errormodel';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public baseURL = 'http://localhost:3000/'

  constructor(public http: HttpClient) { }

  getURI(relativePath: string): string
  {
    return this.baseURL + relativePath;
  }

  public handleError(error:any)
  {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent)
    {
      errorMessage = error.error.message;
    }
    else{
      errorMessage = error.error[0];
    }
    console.log(error);

    return throwError(() => {
      let errorModel: Errormodel = {
        message: errorMessage,
        statusCode: error.statusCode
      };
      return errorModel;
    });
  }
}
