import { Routes } from '@angular/router'


export const AppRoutes: Routes = [
    {
      path: '',
      loadChildren: '../../../app/routes/welcome/welcome.module#WelcomeModule',
    }
]
