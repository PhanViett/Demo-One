import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EplListComponent } from './epl-list.component';

describe('EplListComponent', () => {
  let component: EplListComponent;
  let fixture: ComponentFixture<EplListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EplListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EplListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
