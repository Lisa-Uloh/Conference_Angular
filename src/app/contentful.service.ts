import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
// import { createClient } from 'contentful';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient(
    {
      space: environment.contentful.spaceId,
      accessToken: environment.contentful.token
    }
  );
  constructor() {
    
   }
   getSpeakers(query?: object): Promise<Entry<any>[]>{
      return this.client.getEntries(Object.assign({
        content_type: 'speakers'
      }, query)).then(res => res.items);
   }

   getspeaker(speakerId: any): Promise<Entry<any>>{
    return this.client.getEntries(Object.assign({
      content_type:'speakers'
    }, {'sys.id': speakerId})).then(res => res.items[0])
   }
}
