import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoadChildComponent } from './loadChild.component'

let routes: Routes = [
  {
    path: '',
    component: LoadChildComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [LoadChildComponent]
})
export class LoadChildRouting { }

/*
  This modules tacks on a few routes to angulars RouterModule and declares and route-able components
*/
