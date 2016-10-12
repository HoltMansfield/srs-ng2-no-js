import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template:
  `
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <input class="form-control" placeholder="yyyy-mm-dd"
                 name="dateChosen" [(ngModel)]="model" ngbDatepicker #dtp="ngbDatepicker">
          <div class="input-group-addon" (click)="dtp.toggle()" >
            Appropriate Icon Here
          </div>
        </div>
      </div>
    </form>

    <br/>
    <pre>Model: {{ model | json }}</pre>
  `
})
export class AppComponent {
  model;
}
