// minnimum imports for bare bones module
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import './style/global-styles.scss';
import './style/test.css';

// this is an absolute bare bones ng-module definition
@NgModule({
  declarations: [
    AppComponent // we need to declare our AppComponent in this module so we can boostrap it below
  ],
  imports: [
    BrowserModule // this is a minnimum requirement for running angular in a browser
  ],
  bootstrap: [AppComponent] // this is the boostrapping of our AppComponent
})
export class AppModule { }
