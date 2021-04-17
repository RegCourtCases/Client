import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-case-participant',
  templateUrl: './dialog-add-case-participant.component.html',
  styleUrls: ['./dialog-add-case-participant.component.scss'],
})
export class DialogAddCaseParticipantComponent implements OnInit {
  public form: FormGroup = this.fb.group({});
  constructor(
    public dialogRef: MatDialogRef<DialogAddCaseParticipantComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
}
