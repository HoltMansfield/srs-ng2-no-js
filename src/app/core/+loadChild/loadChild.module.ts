import { NgModule } from '@angular/core'

import { LoadChildRouting } from './loadChild.routing.ts'
import { LoadChildComponent } from './loadChild.component.ts'

@NgModule({
  imports: [LoadChildRouting]
})
export class LoadChildModule { }

/*
    by bringing in the routing module we nicely chain in the addition of our routes    
*/
