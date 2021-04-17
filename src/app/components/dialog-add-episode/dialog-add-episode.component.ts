import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-episode',
  templateUrl: './dialog-add-episode.component.html',
  styleUrls: ['./dialog-add-episode.component.scss'],
})
export class DialogAddEpisodeComponent implements OnInit {
  public form: FormGroup = this.fb.group({});
  constructor(
    public dialogRef: MatDialogRef<DialogAddEpisodeComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
}
