import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-employee-case',
  templateUrl: './dialog-add-employee-case.component.html',
  styleUrls: ['./dialog-add-employee-case.component.scss'],
})
export class DialogAddEmployeeCaseComponent implements OnInit {
  public form: FormGroup = this.fb.group({});
  constructor(
    public dialogRef: MatDialogRef<DialogAddEmployeeCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
}
