import { NgModule } from '@angular/core';

// roll components up into this module
import { HeaderComponent } from './header/header.component'
import { FooterComponent }   from './footer/footer.component'

@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})
export class PageModule { }
