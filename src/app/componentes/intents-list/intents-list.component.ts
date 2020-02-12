import {Component, OnInit} from '@angular/core';
import {IntentsServiceService} from '../../services/intents-service.service';

@Component({
  selector: 'app-intents-list',
  templateUrl: './intents-list.component.html',
  styleUrls: ['./intents-list.component.css']
})
export class IntentsListComponent implements OnInit {
  intents: any = [];

  constructor(private intentsServiceService: IntentsServiceService) {
    this.intentsServiceService.getIntents('OpenCampus').subscribe(data => {
        // console.log(data);
        this.intents = data;
      },
      error => {
        console.log(error);
      });
  }



  ngOnInit() {
  }

}
