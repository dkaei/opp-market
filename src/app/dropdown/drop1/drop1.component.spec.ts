import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drop1Component } from './drop1.component';

describe('Drop1Component', () => {
  let component: Drop1Component;
  let fixture: ComponentFixture<Drop1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drop1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Drop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
