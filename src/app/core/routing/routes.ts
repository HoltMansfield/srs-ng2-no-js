// http://blog.thoughtram.io/angular/2016/06/14/routing-in-angular-2-revisited.html

// bring in Routes for type-safety in our array below
import { Routes } from '@angular/router'

// bring in all of our routable components
import { HomeComponent } from '../home/home.component'
import { LoginComponent } from '../user/login.component'

import { ContactComponent } from '../contact/contact.component'


// ROUTES
export const AppRoutes: Routes = [
    {
      // default route
      path: '',
      component: HomeComponent
    }
    ,
    {
      path: 'login',
      component: LoginComponent
    }
    ,
    {
      path: 'about',
      loadChildren: '../+about/about.module#AboutModule',
      data: {
        preload: true
      },
      canActivate: ['EnsureLoginGuard']
    }
    ,
    {
      path: 'contact',
      component: ContactComponent
    }
    ,
    {
      path: 'lcr',
      loadChildren: '../+loadChild/loadChild.module#LoadChildModule',
      data: {
        preload: false
      }
    }
]
