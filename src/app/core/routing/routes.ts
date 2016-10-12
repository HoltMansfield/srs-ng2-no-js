// http://blog.thoughtram.io/angular/2016/06/14/routing-in-angular-2-revisited.html

// bring in Routes for type-safety in our array below
import { Routes }   from '@angular/router'

// bring in all of our routable components
import { HomeComponent } from '../home/home.component.ts'
import { LoginComponent } from '../user/login.component.ts'

// demonstration of basic routing techniques
import { RouteDemoSnapshotComponent } from './routing-demos/route-demo-snapshot.component.ts'

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
     path: 'route-demo-snapshot/:id',
     component: RouteDemoSnapshotComponent
   }
]

// bring in Component so we can make an array of Components
import { Component } from '@angular/core'

// create array of our routable components
let components: Component[] = [
  HomeComponent,
  LoginComponent,
  RouteDemoSnapshotComponent
]

// return this so we can pass into ngModule.declarations in app.module
export const RoutableComponents = components
