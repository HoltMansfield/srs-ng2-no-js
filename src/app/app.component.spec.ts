import { TestBed } from '@angular/core/testing'

// deps of system under test
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule }   from '@angular/forms'
import { RouterModule }   from '@angular/router'

// note that we can test a component independently of its module
import { AppComponent } from './app.component'

describe('App', () => {

  beforeEach(() => {
    // provide concrete implementations or mocks to the dependency injector
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        NgbModule.forRoot(),
        FormsModule,
        RouterModule.forRoot([])
      ]
    });
  });

  it('should be defined', () => {
    // the equivalent of '$compiling' a directive in angular 1
    let fixture = TestBed.createComponent(AppComponent)

    // ensure that our component has gone through the angular sausage factory
    expect(fixture).toBeDefined()
  });

});
