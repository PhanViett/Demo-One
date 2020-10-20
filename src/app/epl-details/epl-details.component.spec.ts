import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EplDetailsComponent } from './epl-details.component';

describe('EplDetailsComponent', () => {
  let component: EplDetailsComponent;
  let fixture: ComponentFixture<EplDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EplDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EplDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
