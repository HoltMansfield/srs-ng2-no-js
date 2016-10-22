import { Component } from '@angular/core'

var styles = require('./header.module.scss')

@Component({
  selector: 'header',
  template:
  `
    <div class="${ styles.header }">
      <div class="col-6 pull-left">
        <div class="${ styles.logoPanel } smallTextShadow">
          <span class="fa fa-2x fa-pencil-square-o icon-with-text ${ styles.logo }" aria-hidden="true"></span>
          <span class="${ styles.logoText }">Self-Reported Study</span>
        </div>
      </div>
      <div class="col-6 pull-right ${ styles.menu }">
        <i class="fa fa-bars icon-with-text smallTextShadow ${ styles.burger }" aria-hidden="true"></i>
      </div>
      <div class="clearfix"></div>
    </div>
  `
})
export class HeaderComponent { }
