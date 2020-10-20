import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EplUpdateComponent } from './epl-update.component';

describe('EplUpdateComponent', () => {
  let component: EplUpdateComponent;
  let fixture: ComponentFixture<EplUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EplUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EplUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
