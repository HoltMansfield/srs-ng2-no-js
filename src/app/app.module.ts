// minnimum imports for bare bones module
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

// need this for ngModel
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import './scss/bootstrap/scss/bootstrap.scss'
import './scss/global-styles.scss'

// this is an absolute bare bones ng-module definition
@NgModule({
  declarations: [
    AppComponent // we need to declare our AppComponent in this module so we can boostrap it below
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent] // this is the boostrapping of our AppComponent
})
export class AppModule { }
