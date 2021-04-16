import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CourtCase } from 'src/app/entities/court-case.entitie';
import { CourtCaseService } from 'src/app/services/court-case.service';

@Component({
  selector: 'app-court-cases-view',
  templateUrl: './court-cases-view.component.html',
  styleUrls: ['./court-cases-view.component.scss'],
})
export class CourtCasesViewComponent implements OnInit {
  loaded: boolean = false;
  courtCaseId!: number;
  courtCase!: CourtCase;

  constructor(
    private route: ActivatedRoute,
    private courtCaseService: CourtCaseService
  ) {
    this.route.params
      .pipe(take(1))
      .subscribe(({ courtCaseId }) => (this.courtCaseId = courtCaseId));
  }

  ngOnInit(): void {
    this.getCourtCase();
  }

  getCourtCase() {
    this.courtCaseService
      .getCourtCase(this.courtCaseId)
      .pipe(take(1))
      .subscribe((c) => ((this.courtCase = c), (this.loaded = true)));
  }
}
