import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3clickComponent } from './assignment3click.component';

describe('Assignment3clickComponent', () => {
  let component: Assignment3clickComponent;
  let fixture: ComponentFixture<Assignment3clickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment3clickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment3clickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
