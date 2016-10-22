// minnimum imports for bare bones module
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'

// Observables
import 'rxjs/Observable'
import 'rxjs/Subject'
import 'rxjs/Subscription'
import 'rxjs/add/operator/map'

// need this for ngModel
import { FormsModule } from '@angular/forms'
// router
import { RouterModule, PreloadAllModules } from '@angular/router'
// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// bring in providers for registration
import { EnsureLoginGuard } from './core/routing/guards/ensure-login-guard'
import { User } from './core/user/user-provider'

// our main app component
import { AppComponent } from './app.component'
// our routes
import { AppRoutes } from './core/routing/routes'
// header/footer
import { PageModule } from './core/page/page.module'


// SASS imports
import './../scss/bootstrap/bootstrap.scss'
import './../scss/global-styles.scss'


@NgModule({
  declarations: [
    AppComponent
  ]
  ,
  imports: [
    // Third Party Dependencies
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes,
      { preloadingStrategy: PreloadAllModules }
    ),
    NgbModule.forRoot(),
    // Our Dependencies
    PageModule
  ]
  ,
  providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
      { provide: User, useClass: User },
      // defining this like the other providers does not work and I suspect it's because the route definition references this provider with a string name
      { provide: 'EnsureLoginGuard', useClass: EnsureLoginGuard }
    ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
