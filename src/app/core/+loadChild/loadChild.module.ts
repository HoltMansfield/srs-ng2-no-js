import { NgModule } from '@angular/core'

import { LoadChildRouting } from './loadChild.routing'
import { LoadChildComponent } from './loadChild.component'

@NgModule({
  imports: [LoadChildRouting]
})
export class LoadChildModule { }

/*
    by bringing in the routing module we nicely chain in the addition of our routes
*/
