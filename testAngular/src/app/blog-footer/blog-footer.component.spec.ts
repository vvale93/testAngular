import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFooterComponent } from './blog-footer.component';

describe('BlogFooterComponent', () => {
  let component: BlogFooterComponent;
  let fixture: ComponentFixture<BlogFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
