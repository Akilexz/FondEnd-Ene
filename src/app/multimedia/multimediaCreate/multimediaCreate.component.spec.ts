import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaCreateComponent } from './multimediaCreate.component';

describe('MultimediaCreateComponent', () => {
  let component: MultimediaCreateComponent;
  let fixture: ComponentFixture<MultimediaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
MultimediaCreateComponent.call({
  // tslint:disable-next-line:whitespace
  'enviar':postgrsql.bold.name
// tslint:disable-next-line:no-shadowed-variable
}).then ( _MultimediaCreateComponent => {
    // Send created customer to client
}).catch(err => {
console.log(err);
});

