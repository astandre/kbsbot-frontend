import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Intent} from '../model/intent';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class IntentsServiceService {

  constructor(private http: HttpClient) {
  }

  getIntents(agentName: string): Observable<Intent[]> {
    const url = `http://127.0.0.1:5007/kg/intents?agent=${agentName}`;
    return this.http.get(url, httpOptions).pipe(map(res => {
        return res['intents'].map(item => {
          return new Intent(
            item.name,
            item.description
          );
        });
      }
    ));
  }
}
