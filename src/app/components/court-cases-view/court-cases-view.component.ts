import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import {
  BasisIntroductionCriminalCase,
  CourtCase,
  DirectionDispute,
  ResultDispute,
  TypeCase,
  TypeLegalProceedings,
} from 'src/app/entities/court-case.entitie';
import { CourtCaseService } from 'src/app/services/court-case.service';
import { DialogAddArticleCaseComponent } from '../dialog-add-article-case/dialog-add-article-case.component';
import { DialogAddCaseParticipantComponent } from '../dialog-add-case-participant/dialog-add-case-participant.component';
import { DialogAddEmployeeCaseComponent } from '../dialog-add-employee-case/dialog-add-employee-case.component';
import { DialogAddEpisodeComponent } from '../dialog-add-episode/dialog-add-episode.component';
import { DialogAddExpertiseComponent } from '../dialog-add-expertise/dialog-add-expertise.component';
import { DialogAddInspectorsCaseComponent } from '../dialog-add-inspectors-case/dialog-add-inspectors-case.component';
import { DialogAddProductionComponent } from '../dialog-add-production/dialog-add-production.component';
import { DialogAddThingCaseComponent } from '../dialog-add-thing-case/dialog-add-thing-case.component';

@Component({
  selector: 'app-court-cases-view',
  templateUrl: './court-cases-view.component.html',
  styleUrls: ['./court-cases-view.component.scss'],
})
export class CourtCasesViewComponent implements OnInit {
  loaded: boolean = false;
  courtCaseId!: number;
  courtCase!: CourtCase;

  TypeCase = TypeCase;
  TypeLegalProceedings = TypeLegalProceedings;
  BasisIntroductionCriminalCase = BasisIntroductionCriminalCase;
  ResultDispute = ResultDispute;
  DirectionDispute = DirectionDispute;

  constructor(
    private route: ActivatedRoute,
    private courtCaseService: CourtCaseService,
    public dialog: MatDialog
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
      .subscribe(
        (c) => (
          (this.courtCase = c),
          (this.loaded = true),
          console.log(this.courtCase)
        )
      );
  }

  openAddCaseParticipant() {
    this.dialog.open(DialogAddCaseParticipantComponent, {
      data: this.courtCaseId,
    });
  }

  openAddArticleCase() {
    this.dialog.open(DialogAddArticleCaseComponent, {
      data: this.courtCaseId,
    });
  }

  openAddEmployeeCase() {
    this.dialog.open(DialogAddEmployeeCaseComponent, {
      data: this.courtCaseId,
    });
  }

  openAddEpisode() {
    this.dialog.open(DialogAddEpisodeComponent, {
      data: this.courtCaseId,
    });
  }

  openAddExpertise() {
    this.dialog.open(DialogAddExpertiseComponent, {
      data: this.courtCaseId,
    });
  }

  openAddInspectorsCase() {
    this.dialog.open(DialogAddInspectorsCaseComponent, {
      data: this.courtCaseId,
    });
  }

  openAddProduction() {
    this.dialog.open(DialogAddProductionComponent, {
      data: this.courtCaseId,
    });
  }

  openAddThingCase() {
    this.dialog.open(DialogAddThingCaseComponent, {
      data: this.courtCaseId,
    });
  }
}
