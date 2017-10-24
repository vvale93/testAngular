import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastpostsComponent } from './lastposts.component';

describe('LastpostsComponent', () => {
  let component: LastpostsComponent;
  let fixture: ComponentFixture<LastpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
