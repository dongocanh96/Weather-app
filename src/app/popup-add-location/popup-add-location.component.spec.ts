import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddLocationComponent } from './popup-add-location.component';

describe('PopupAddLocationComponent', () => {
  let component: PopupAddLocationComponent;
  let fixture: ComponentFixture<PopupAddLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
