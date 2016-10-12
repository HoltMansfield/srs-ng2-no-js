import { Component } from '@angular/core'

@Component({
  selector: 'home',
  template:
  `
    <div>We home baby</div>
    <div>This simple link doesn't require the [expression-syntax]</div>
    <a routerLink='/login'>Click Here to Log In</a>
    <div>This link uses the array literal syntax and that requires expression evaluation</div>
    <a [routerLink]="['route-demo-snapshot','420']">Snapshot Route param demo</a>
  `
})
export class HomeComponent { }
