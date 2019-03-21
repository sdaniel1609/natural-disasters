import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterSearchComponent } from './disaster-search.component';

describe('DisasterSearchComponent', () => {
  let component: DisasterSearchComponent;
  let fixture: ComponentFixture<DisasterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisasterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
