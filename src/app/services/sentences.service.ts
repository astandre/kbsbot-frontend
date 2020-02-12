import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sentence} from '../model/sentence';
import {map} from 'rxjs/operators';
import {Entity} from '../model/entity';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SentencesService {

  constructor(private http: HttpClient) {
  }

  getUnclassifiedSentences(agentName: string): Observable<Sentence[]> {
    const url = `http://127.0.0.1:5007/interactions/all?agent=${agentName}`;
    return this.http.get(url, httpOptions).pipe(map(res => {
        return res['interactions'].map(item => {
          return new Sentence(
            item.id,
            item.sentence
          );
        });
      }
    ));
  }

  postNewSentence(agentName: string, localIntent: string, localSentence: string, id: string): Observable<any> {
    const url = `http://127.0.0.1:5007/kg/new/sentence`;
    return this.http.post(url, JSON.stringify({
      agent: agentName,
      sentence: localSentence,
      intent: localIntent,
      mongo_id: id
    }), httpOptions);
  }
}
