import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-accordion',
  templateUrl: './medical-accordion.component.html',
  styleUrls: ['./medical-accordion.component.scss'],
})
export class MedicalAccordionComponent implements OnInit {
  @Input() medicalData: any;
  keys: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.keys = Object.keys(this.medicalData.data);
  }
}
