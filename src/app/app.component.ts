import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template:
  `
    <div>Header</div>
    <router-outlet></router-outlet>
    <div>Footer</div>
  `
})
export class AppComponent {
  model;
}
