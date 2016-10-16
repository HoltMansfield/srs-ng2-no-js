// minnimum imports for bare bones module
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'

// Observables
import 'rxjs/Observable';
import 'rxjs/Subject';
import 'rxjs/Subscription';
import 'rxjs/add/operator/map';

// need this for ngModel
import { FormsModule }   from '@angular/forms'
// router
import { RouterModule }   from '@angular/router'
// our routing strategy
import { MyPreloadingStrategy } from './core/routing/preloading-strategy.ts'


// our main app component
import { AppComponent } from './app.component'
// our routes
import { AppRoutes } from './core/routing/routes.ts'

// bring in all of our routable components so we can declare them for the router
import { HomeComponent } from './core/home/home.component.ts'
import { LoginComponent } from './core/user/login.component.ts'


import { ContactComponent } from './core/contact/contact.component.ts'


// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// SASS imports
import './scss/bootstrap/scss/bootstrap.scss'
import './scss/global-styles.scss'

// We need to declare all of our routable components, so we export a tidy array from routes.ts
let declarations: Component[] = [
  AppComponent,
  HomeComponent,
  LoginComponent,
  ContactComponent
]

// we then push on our actual 'App' component
declarations.unshift(AppComponent)

@NgModule({
  declarations: [
    declarations
  ]
  ,
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes,
      { preloadingStrategy: MyPreloadingStrategy }
    ),
    NgbModule.forRoot()
  ]
  ,
  providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
      MyPreloadingStrategy
    ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
