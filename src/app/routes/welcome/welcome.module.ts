import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome.routes'

import { WelcomeComponent }   from './welcome.component'

@NgModule({
  imports: [
    WelcomeRoutingModule
  ],
  exports: [],
  declarations: [WelcomeComponent],
  providers: [],
})
export class WelcomeModule { }
