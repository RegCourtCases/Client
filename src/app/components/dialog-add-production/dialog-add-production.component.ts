import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CourtCaseService } from 'src/app/services/court-case.service';

@Component({
  selector: 'app-dialog-add-production',
  templateUrl: './dialog-add-production.component.html',
  styleUrls: ['./dialog-add-production.component.scss'],
})
export class DialogAddProductionComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    courtCaseId: [null],
    typeInstance: [0, [Validators.required]],
    nameCourt: [null, [Validators.required]],
    judge: [null, [Validators.required]],
    dateStatementClaim: [null, [Validators.required]],
    dateInitiationProceedings: [null, [Validators.required]],
    claimAmount: [null],
    stateDuties: [null],
    descriptionClaim: [null],
    solutionType: [null],
    amountJudicialAct: [null],
    dateDecision: [null],
    dateEffectiveDecision: [null],
  });
  constructor(
    public dialogRef: MatDialogRef<DialogAddProductionComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder,
    private courtCaseService: CourtCaseService
  ) {
    this.form.controls.courtCaseId.setValue(+this.courtCaseId);
  }

  ngOnInit(): void {}

  create() {
    this.courtCaseService
      .createOrEditProductions(this.form.value)
      .pipe(take(1))
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
