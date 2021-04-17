import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-inspectors-case',
  templateUrl: './dialog-add-inspectors-case.component.html',
  styleUrls: ['./dialog-add-inspectors-case.component.scss'],
})
export class DialogAddInspectorsCaseComponent implements OnInit {
  public form: FormGroup = this.fb.group({});
  constructor(
    public dialogRef: MatDialogRef<DialogAddInspectorsCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
}
