import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'route-demo-snapshot',
  template:
  `
    <div>Value Below displayed using a snapshot</div>
    <strong>{{ snapShotValue }}</strong>

    <div>Value Below displayed using an observable, if you update the source of this value only this one will change</div>
    <strong>{{ observableUpdatedValue }}</strong>

    <div>If your value will change use the second approach</div>
  `
})
export class RouteDemoSnapshotComponent {
  snapShotValue;
  observableUpdatedValue;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this reads is a simple static value
    this.snapShotValue = this.route.snapshot.params['id']

    // this approach works with observables for when the param value can change
    this.route.params
      // the map operator allows us to chose the route param we're interested in
      .map(params => params['id'])
      // here we create a subscription to future updates of this value
      .subscribe(id => this.observableUpdatedValue = id)
  }
}
