import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrocileComponent } from './crocile.component';

describe('CrocileComponent', () => {
  let component: CrocileComponent;
  let fixture: ComponentFixture<CrocileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrocileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrocileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
