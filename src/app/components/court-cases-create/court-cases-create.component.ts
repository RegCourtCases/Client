import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourtSaseService } from 'src/app/services/court-case.service';

@Component({
  selector: 'app-court-cases-create',
  templateUrl: './court-cases-create.component.html',
  styleUrls: ['./court-cases-create.component.scss'],
})
export class CourtCasesCreateComponent implements OnInit {
  public form: FormGroup = this.fb.group({
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
    private courtSaseService: CourtSaseService
  ) {}

  ngOnInit(): void {}

  create() {
    this.courtSaseService.createOrEdit(this.form.value).subscribe((r) => {
      this.router.navigate(['/courtcase/view', r.id]);
    });
  }
}
