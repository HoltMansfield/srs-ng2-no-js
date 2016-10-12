import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'route-demo-snapshot',
  template:
  `
    <div>Value Below displayed using a snapshot</div>
    <strong>{{ snapShotValue }}</strong>

    <div>Value Below displayed using an observable, if you update the url only this one will change</div>
    <strong>{{ observableUpdatedValue }}</strong>
  `
})
export class RouteDemoSnapshotComponent {
  snapShotValue;
  observableUpdatedValue;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.snapShotValue = this.route.snapshot.params['id']

    this.route.params
      .map(params => params['id'])
      .subscribe(id => this.observableUpdatedValue  = id)
  }
}
