import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUpFormComponent } from './log-up-form.component';

describe('LogUpFormComponent', () => {
  let component: LogUpFormComponent;
  let fixture: ComponentFixture<LogUpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogUpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
