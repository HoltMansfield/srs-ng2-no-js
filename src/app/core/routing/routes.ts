// http://blog.thoughtram.io/angular/2016/06/14/routing-in-angular-2-revisited.html

// bring in Routes for type-safety in our array below
import { Routes } from '@angular/router'

// bring in all of our routable components
import { HomeComponent } from '../home/home.component.ts'
import { LoginComponent } from '../user/login.component.ts'

// demonstration of basic routing techniques
import { RouteDemoSnapshotComponent } from './routing-demos/route-demo-snapshot.component.ts'


// ROUTES
export const AppRoutes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    }
  ,
    {
      path: 'route-data-demo/:id',
      component: RouteDemoSnapshotComponent
    }
  ,
    {
      // default route
      path: '',
      component: HomeComponent
    }
]
