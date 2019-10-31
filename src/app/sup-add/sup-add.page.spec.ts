import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAddPage } from './sup-add.page';

describe('SupAddPage', () => {
  let component: SupAddPage;
  let fixture: ComponentFixture<SupAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
