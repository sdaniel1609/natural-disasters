import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterDetailsComponent } from './disaster-details.component';

describe('DisasterDetailsComponent', () => {
  let component: DisasterDetailsComponent;
  let fixture: ComponentFixture<DisasterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisasterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
