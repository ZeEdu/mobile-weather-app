import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayGeolocationErrorComponent } from './display-geolocation-error.component';

describe('DisplayGeolocationErrorComponent', () => {
  let component: DisplayGeolocationErrorComponent;
  let fixture: ComponentFixture<DisplayGeolocationErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayGeolocationErrorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayGeolocationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
