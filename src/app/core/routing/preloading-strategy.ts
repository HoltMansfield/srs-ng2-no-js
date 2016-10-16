import { Route, PreloadingStrategy } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

export class MyPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
        return fn();
    }
    else {
        return Observable.of(null);
    }
  }
}
