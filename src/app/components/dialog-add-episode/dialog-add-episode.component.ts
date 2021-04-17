import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CourtCaseService } from 'src/app/services/court-case.service';

@Component({
  selector: 'app-dialog-add-episode',
  templateUrl: './dialog-add-episode.component.html',
  styleUrls: ['./dialog-add-episode.component.scss'],
})
export class DialogAddEpisodeComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    courtCaseId: [null],
    workingTitle: [null, [Validators.required]],
    categoryCrime: [null, [Validators.required]],
    typeCrime: [null, [Validators.required]],
    dateStartCrime: [null, [Validators.required]],
    dateEndCrime: [null, [Validators.required]],
    placeCrime: [null, [Validators.required]],
    motiveCrime: [null],
    purposeCrime: [null],
    toolCrime: [null],
    notes: [null],
  });
  constructor(
    public dialogRef: MatDialogRef<DialogAddEpisodeComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder,
    private courtCaseService: CourtCaseService
  ) {
    this.form.controls.courtCaseId.setValue(+this.courtCaseId);
  }

  ngOnInit(): void {}

  create() {
    this.courtCaseService
      .createOrEditEpisodes(this.form.value)
      .pipe(take(1))
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
