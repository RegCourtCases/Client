import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-article-case',
  templateUrl: './dialog-add-article-case.component.html',
  styleUrls: ['./dialog-add-article-case.component.scss'],
})
export class DialogAddArticleCaseComponent implements OnInit {
  public form: FormGroup = this.fb.group({});

  constructor(
    public dialogRef: MatDialogRef<DialogAddArticleCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder
  ) {
    console.log(courtCaseId);
  }

  ngOnInit(): void {}
}
