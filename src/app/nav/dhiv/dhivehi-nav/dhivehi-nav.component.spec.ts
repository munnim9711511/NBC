import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhivehiNavComponent } from './dhivehi-nav.component';

describe('DhivehiNavComponent', () => {
  let component: DhivehiNavComponent;
  let fixture: ComponentFixture<DhivehiNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhivehiNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhivehiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
