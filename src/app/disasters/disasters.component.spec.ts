import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisastersComponent } from './disasters.component';

describe('DisastersComponent', () => {
  let component: DisastersComponent;
  let fixture: ComponentFixture<DisastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
