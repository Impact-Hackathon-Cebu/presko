import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupHomePage } from './sup-home.page';

describe('SupHomePage', () => {
  let component: SupHomePage;
  let fixture: ComponentFixture<SupHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
