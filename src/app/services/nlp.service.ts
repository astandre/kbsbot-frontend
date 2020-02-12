import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Intent} from '../model/intent';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Entity} from '../model/entity';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NlpService {

  constructor(private http: HttpClient) {
  }

  getIntentNlp(agentName: string, localSentence: string): Observable<Intent[]> {
    console.log('Looking for intent', agentName, localSentence);
    const url = `http://127.0.0.1:5001/intents`;
    return this.http.post(url, JSON.stringify({agent: agentName, sentence: localSentence}), httpOptions).pipe(map(res => {
        return res['intent'].map(item => {
          return new Intent(
            item.label.replace('__label__', ''),
            '',
            item.probability.toFixed(2)
          );
        });
      }
    ));
  }


  getEntitiesNlp(agentName: string, localSentence: string): Observable<Entity[]> {
    const url = `http://127.0.0.1:5001/entities`;
    return this.http.post(url, JSON.stringify({agent: agentName, sentence: localSentence}), httpOptions).pipe(map(res => {
        return res['entities'].map(item => {
          return new Entity(
            item.label.replace('__label__', ''),
            item.entity,
            item.probability.toFixed(2)
          );
        });
      }
    ));
  }
}
