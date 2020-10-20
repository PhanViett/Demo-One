import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EplCreateComponent } from './epl-create.component';

describe('EplCreateComponent', () => {
  let component: EplCreateComponent;
  let fixture: ComponentFixture<EplCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EplCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EplCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
