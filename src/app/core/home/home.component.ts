import { Component } from '@angular/core'

@Component({
  selector: 'home',
  template:
  `
  <div>
  <span class="fa fa-2x fa-pencil-square-o" style="vertical-align: middle;"></span>
  <span style="font-weight: 700">Icon Life</span>
  </div>
    <div>This link is local</div>
    <a routerLink="/login">Click Here to Log In</a>
    <div>This link is lazy</div>
    <div>
      <a routerLink='/about'>a boot (pre-loaded)</a>
    </div>
    <div>
      <a routerLink='/contact'>contact</a>
    </div>
    <div>
      <a routerLink='/lcr'>load child routes (NOT pre-loaded)</a>
    </div>
  `
})
export class HomeComponent { }
