import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MedicalManagementService } from '../medical-management.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss'],
})
export class DiagnosisComponent implements OnInit {
  selectedDiagnosis = new FormControl('', Validators.required);

  dignosisList: { diagnosis: String; icd_code: String }[] = [];

  form: FormGroup;

  medicalData: any;
  selectedAge = new FormControl('');
  constructor(
    private fb: FormBuilder,
    private medicalService: MedicalManagementService,
    private spinner: NgxSpinnerService
  ) {
    this.form = this.fb.group({
      icd_codes: ['', Validators.required],
      bill_line_item_details: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.spinner.show();
    this.selectedDiagnosis.valueChanges.subscribe((x) => this.showOptions());

    this.medicalService.getDiagnosisList().subscribe(
      (x) => {
        (this.dignosisList = x.data), this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  get bill_line_item_details(): FormArray {
    return this.form.get('bill_line_item_details') as FormArray;
  }

  newDetails(body: { desciption: String; quantity: Number | null }): FormGroup {
    return this.fb.group({
      description: body.desciption,
      quantity: body.quantity,
    });
  }

  addDetails() {
    this.bill_line_item_details.push(
      this.newDetails({ desciption: '', quantity: null })
    );
  }

  removeDetails(i: number) {
    this.bill_line_item_details.removeAt(i);
  }

  showOptions(): void {
    // You can perform further actions here based on the selected option
    if (this.selectedDiagnosis.value?.length == 1) {
      this.addDetails();
    }
  }

  onOptionChange(): void {
    // Additional actions when the dropdown selection changes
  }

  onSubmit(): void {
    this.spinner.show();
    this.form.get('icd_codes')?.setValue(this.selectedDiagnosis.value);
    console.log(this.form.value);

    // this.medicalData = {
    //   data: {
    //     consultation: [
    //       {
    //         description: 'Specialist Consultation',
    //         quantity: 1,
    //         medically_admissible: true,
    //         medically_admissible_comment: 'Allowed',
    //       },
    //       {
    //         description: 'administration charges',
    //         quantity: 1,
    //         medically_admissible: true,
    //         medically_admissible_comment: 'Allowed',
    //       },
    //     ],
    //     investigation: [
    //       {
    //         description: 'BLOOD SUGAR[FASTING]',
    //         quantity: 1,
    //         investigation_name: 'Fasting blood glucose',
    //         medically_admissible: false,
    //         medically_admissible_comment: 'Not Allowed',
    //       },
    //       {
    //         description: 'Chest X-Ray',
    //         quantity: 1,
    //         investigation_name: 'Chest radiography',
    //         medically_admissible: false,
    //         medically_admissible_comment: 'Not Allowed',
    //       },
    //     ],
    //     medication: [
    //       {
    //         description: 'DIOCLAV 1GM F.C.TABLETS, 14 TAB,PKT',
    //         quantity: 1,
    //         brand_name: 'dioclav',
    //         drug_name: 'amoxicillin + clavulanic Acid',
    //         medically_admissible: true,
    //         medically_admissible_comment:
    //           ' clavulanic acid allowed for diagnosis: Acute upper respiratory infection, unspecified',
    //       },
    //       {
    //         description: 'LANZOL 30 CAPSULES 30 MG, 30 CAP,PKT',
    //         quantity: 1,
    //         brand_name: 'lanzol',
    //         drug_name: 'lansoprazole',
    //         medically_admissible: false,
    //         medically_admissible_comment: 'Not Allowed',
    //       },
    //     ],
    //     treatment: [
    //       {
    //         description: 'sutures',
    //         quantity: 1,
    //         medically_admissible: false,
    //         medically_admissible_comment: 'Not Allowed',
    //       },
    //     ],
    //     others: [],
    //   },
    //   response_status: 'Success',
    // };

    this.medicalService.getMedicalDetails(this.form.value).subscribe(
      (x: any) => {
        this.medicalData = x;
        this.spinner.hide();
      },
      (error) => this.spinner.hide()
    );
  }
}
