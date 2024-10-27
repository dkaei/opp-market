import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drop4Component } from './drop4.component';

describe('Drop4Component', () => {
  let component: Drop4Component;
  let fixture: ComponentFixture<Drop4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drop4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Drop4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
