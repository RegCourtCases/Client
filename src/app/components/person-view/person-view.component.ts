import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import {
  CourtCase,
  TypeCase,
  TypeLegalProceedings,
} from 'src/app/entities/court-case.entitie';
import { CourtCaseService } from 'src/app/services/court-case.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.scss'],
})
export class PersonViewComponent implements OnInit {
  personId!: number;
  courtCases!: CourtCase[];
  TypeCase = TypeCase;
  TypeLegalProceedings = TypeLegalProceedings;

  constructor(
    private courtCaseService: CourtCaseService,
    private route: ActivatedRoute
  ) {
    this.route.params.pipe(take(1)).subscribe(({ personId }) => {
      this.personId = personId;
    });
  }

  ngOnInit(): void {
    this.getCourtCases();
  }

  getCourtCases() {
    this.courtCaseService
      .getCourtCasesByPerson(this.personId)
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
