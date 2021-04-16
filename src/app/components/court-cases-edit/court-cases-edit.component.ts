import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CourtCaseService } from 'src/app/services/court-case.service';

@Component({
  selector: 'app-court-cases-edit',
  templateUrl: './court-cases-edit.component.html',
  styleUrls: ['./court-cases-edit.component.scss'],
})
export class CourtCasesEditComponent implements OnInit {
  public loaded: boolean = false;
  public form: FormGroup = this.fb.group({
    courtCaseId: [null],
    typeCase: [0],
    typeLegalProceedings: [0],
    dateReceiptPrimaryDocument: [null, [Validators.required]],
    basisIntroductionCriminalCase: [null],
    dateProductionEnd: [null],
    dateEffectiveDecision: [null],
    subjectDispute: [null],
    basisDispute: [null],
    resultDispute: [null],
    directionDispute: [null],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courtCaseService: CourtCaseService
  ) {
    this.route.params
      .pipe(take(1))
      .subscribe(({ courtCaseId }) =>
        this.form.controls.courtCaseId.setValue(courtCaseId)
      );
  }

  ngOnInit(): void {
    this.getCourtCase();
  }

  getCourtCase() {
    this.courtCaseService
      .getCourtCasePlane(this.form.value.courtCaseId)
      .subscribe((c) => {
        c.dateReceiptPrimaryDocument = c.dateReceiptPrimaryDocument.slice(0, 10);
        c.dateEffectiveDecision = c.dateEffectiveDecision?.slice(0, 10);
        c.dateProductionEnd = c.dateProductionEnd?.slice(0, 10);

        this.form.patchValue(c);
        this.loaded = true;
      });
  }

  edit() {
    this.courtCaseService.createOrEdit(this.form.value).subscribe((r) => {
      this.router.navigate(['/courtcase/view', r.id]);
    });
  }
}
