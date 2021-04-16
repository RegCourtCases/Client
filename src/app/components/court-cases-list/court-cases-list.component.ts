import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import {
  CourtCase,
  TypeCase,
  TypeLegalProceedings,
} from 'src/app/entities/court-case.entitie';
import { CourtCaseService } from 'src/app/services/court-case.service';

@Component({
  selector: 'app-court-cases-list',
  templateUrl: './court-cases-list.component.html',
  styleUrls: ['./court-cases-list.component.scss'],
})
export class CourtCasesListComponent implements OnInit {
  courtCases!: CourtCase[];
  TypeCase = TypeCase;
  TypeLegalProceedings = TypeLegalProceedings;

  constructor(private courtCaseService: CourtCaseService) {}

  ngOnInit(): void {
    this.getCourtCases();
  }

  getCourtCases() {
    this.courtCaseService
      .getCourtCases()
      .pipe(take(1))
      .subscribe((c) => {
        this.courtCases = c;
      });
  }

  delete(courtCaseId: number) {
    this.courtCases = this.courtCases.filter(
      (c) => c.courtCaseId != courtCaseId
    );
  }
}
