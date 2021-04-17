import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CourtCaseService } from 'src/app/services/court-case.service';

@Component({
  selector: 'app-dialog-edit-production',
  templateUrl: './dialog-edit-production.component.html',
  styleUrls: ['./dialog-edit-production.component.scss'],
})
export class DialogEditProductionComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    courtCaseId: [null],
    productionId: [null],
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
    public dialogRef: MatDialogRef<DialogEditProductionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private courtCaseService: CourtCaseService
  ) {
    this.form.controls.courtCaseId.setValue(+data.courtCaseId);
    this.form.controls.productionId.setValue(+data.productionId);
  }

  ngOnInit(): void {
    this.getProduction();
  }

  getProduction() {
    this.courtCaseService
      .getProduction(this.data.productionId)
      .pipe(take(1))
      .subscribe((p) => {
        p.dateStatementClaim = p.dateStatementClaim?.slice(0, 10);
        p.dateInitiationProceedings = p.dateInitiationProceedings?.slice(0, 10);
        p.dateDecision = p.dateDecision?.slice(0, 10);
        p.dateEffectiveDecision = p.dateEffectiveDecision?.slice(0, 10);
        this.form.patchValue(p);
      });
  }

  edit() {
    this.courtCaseService
      .createOrEditProductions(this.form.value)
      .pipe(take(1))
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
