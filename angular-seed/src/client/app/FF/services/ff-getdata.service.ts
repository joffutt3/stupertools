import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';  // for debugging
import { randomData } from '../models/randomData';

@Injectable()
export class FFDataService {

  constructor(private http: Http) {}

  get() : Observable<randomData[]> {
    return this.http.get('http://localhost:8080/FantasyFootball')
    //return this.http.get('/assets/data.json')
      .map((res: Response) => res.json())
                    .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
