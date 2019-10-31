import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConHomePage } from './con-home.page';

describe('ConHomePage', () => {
  let component: ConHomePage;
  let fixture: ComponentFixture<ConHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
