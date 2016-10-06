import { TestBed } from '@angular/core/testing'

// note that we can test a component independently of its module
import { AppComponent } from './app.component'

describe('App', () => {

  beforeEach(() => {
    // provide concrete implementations or mocks to the dependency injector
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
  });

  it('should be defined', () => {
    // the equivalent of '$compiling' a directive in angular 1
    let fixture = TestBed.createComponent(AppComponent)

    // ensure that our component has gone through the angular sausage factory
    expect(fixture).toBeDefined()
  });

});
