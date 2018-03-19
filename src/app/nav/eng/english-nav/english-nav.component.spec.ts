import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishNavComponent } from './english-nav.component';

describe('EnglishNavComponent', () => {
  let component: EnglishNavComponent;
  let fixture: ComponentFixture<EnglishNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
