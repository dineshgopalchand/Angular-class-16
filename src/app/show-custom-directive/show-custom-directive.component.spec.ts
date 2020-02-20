import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomDirectiveComponent } from './show-custom-directive.component';

describe('ShowCustomDirectiveComponent', () => {
  let component: ShowCustomDirectiveComponent;
  let fixture: ComponentFixture<ShowCustomDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCustomDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
