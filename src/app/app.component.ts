import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template:
  `
    <div class="container-fluid">
      <div class="row">
        <header></header>
        <router-outlet></router-outlet>
      </div>
    </div>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  model;
}
