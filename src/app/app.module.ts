// minnimum imports for bare bones module
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component } from '@angular/core'

// Observables
import 'rxjs/Observable';
import 'rxjs/Subject';
import 'rxjs/Subscription';
import 'rxjs/add/operator/map';

// need this for ngModel
import { FormsModule }   from '@angular/forms'
// router
import { RouterModule }   from '@angular/router'


// our main app component
import { AppComponent } from './app.component'
// our routes
import { AppRoutes, RoutableComponents } from './core/routing/routes.ts'


// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// SASS imports
import './scss/bootstrap/scss/bootstrap.scss'
import './scss/global-styles.scss'

// We need to declare all of our routable components, so we export a tidy array from routes.ts
let declarations: Component[] = [
  ...RoutableComponents,  AppComponent
]

// we then push on our actual 'App' component
declarations.unshift(AppComponent)

@NgModule({
  declarations: [
    declarations
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
