import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-expertise',
  templateUrl: './dialog-add-expertise.component.html',
  styleUrls: ['./dialog-add-expertise.component.scss'],
})
export class DialogAddExpertiseComponent implements OnInit {
  public form: FormGroup = this.fb.group({});
  constructor(
    public dialogRef: MatDialogRef<DialogAddExpertiseComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
}
