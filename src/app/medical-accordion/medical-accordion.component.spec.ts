import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAccordionComponent } from './medical-accordion.component';

describe('MedicalAccordionComponent', () => {
  let component: MedicalAccordionComponent;
  let fixture: ComponentFixture<MedicalAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalAccordionComponent]
    });
    fixture = TestBed.createComponent(MedicalAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
