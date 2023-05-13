import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMapComponent } from './map.component';

describe('AppMapComponent', () => {
  let component: AppMapComponent;
  let fixture: ComponentFixture<AppMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMapComponent]
    });
    fixture = TestBed.createComponent(AppMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
