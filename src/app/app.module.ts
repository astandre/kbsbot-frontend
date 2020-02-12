import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {IntentsListComponent} from './componentes/intents-list/intents-list.component';
import {HttpClientModule} from '@angular/common/http';
import { UnclassifiedSentencesComponent } from './componentes/unclassified-sentences/unclassified-sentences.component';


@NgModule({
  declarations: [
    AppComponent,
    IntentsListComponent,
    UnclassifiedSentencesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
