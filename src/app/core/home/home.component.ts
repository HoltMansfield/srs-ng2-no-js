import { Component } from '@angular/core'

@Component({
  selector: 'home',
  template:
  `
    <div>This link is local</div>
    <a routerLink="/login">Click Here to Log In</a>
    <div>This link is lazy</div>
    <a routerLink='/about'>a boot</a>
  `
})
export class HomeComponent { }
