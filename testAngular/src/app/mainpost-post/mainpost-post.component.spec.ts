import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpostPostComponent } from './mainpost-post.component';

describe('MainpostPostComponent', () => {
  let component: MainpostPostComponent;
  let fixture: ComponentFixture<MainpostPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpostPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpostPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
