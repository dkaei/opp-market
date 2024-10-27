import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drop3Component } from './drop3.component';

describe('Drop3Component', () => {
  let component: Drop3Component;
  let fixture: ComponentFixture<Drop3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drop3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Drop3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
