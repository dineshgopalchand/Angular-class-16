import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEventComponent } from './data-event.component';

describe('DataEventComponent', () => {
  let component: DataEventComponent;
  let fixture: ComponentFixture<DataEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
