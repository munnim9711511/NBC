import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishmainComponent } from './englishmain.component';

describe('EnglishmainComponent', () => {
  let component: EnglishmainComponent;
  let fixture: ComponentFixture<EnglishmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
