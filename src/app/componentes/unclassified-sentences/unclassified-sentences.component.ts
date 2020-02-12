import {Component, OnInit} from '@angular/core';
import {IntentsServiceService} from '../../services/intents-service.service';
import {SentencesService} from '../../services/sentences.service';
import {NlpService} from '../../services/nlp.service';
import {Intent} from '../../model/intent';

@Component({
  selector: 'app-unclassified-sentences',
  templateUrl: './unclassified-sentences.component.html',
  styleUrls: ['./unclassified-sentences.component.css']
})
export class UnclassifiedSentencesComponent implements OnInit {
  agent: string;
  sentences: any = [];
  intents: any = [];
  entities: any = [];
  intent: Intent;
  currentSentence = '';
  currentIntent = '';
  currentMessageId = '';
  newIntent = '';

  constructor(private sentencesService: SentencesService,
              private intentsServiceService: IntentsServiceService, private nlpService: NlpService) {
    this.agent = 'OpenCampus';
    this.sentencesService.getUnclassifiedSentences(this.agent).subscribe(data => {
        // console.log(data);
        this.sentences = data;
      },
      error => {
        console.log(error);
      });
    this.intentsServiceService.getIntents(this.agent).subscribe(data => {
        // console.log(data);
        this.intents = data;
      },
      error => {
        console.log(error);
      });


  }

  clasificarClick(event: Event, sentence) {
    this.currentSentence = sentence.sentText;
    this.currentMessageId = sentence.id;
    console.log('Click!', sentence);
    this.nlpService.getIntentNlp(this.agent, sentence.sentText).subscribe(data => {
        console.log(data);
        this.intent = data[0];
        this.currentIntent = this.intent.name;
      },
      error => {
        console.log(error);
      });

    this.nlpService.getEntitiesNlp(this.agent, sentence.sentText).subscribe(data => {
        console.log(data);
        this.entities = data;
      },
      error => {
        console.log(error);
      });
  }


  aceptarClasificacion(sentence: string = this.currentSentence, intent: string = this.currentIntent,
                       agent: string = this.agent, id: string = this.currentMessageId) {
    console.log('Guardando clasificacion', id, sentence, intent);
    this.sentencesService.postNewSentence(agent, intent, sentence, id).subscribe(data => {
      console.log(data);
      console.log('Datos guardados', id, sentence, intent);
    });
  }


  ngOnInit() {
  }

}
