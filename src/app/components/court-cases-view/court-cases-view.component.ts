import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import {
  BasisIntroductionCriminalCase,
  CourtCase,
  DirectionDispute,
  ResultDispute,
  SolutionType,
  TypeCase,
  TypeInstance,
  TypeLegalProceedings,
} from 'src/app/entities/court-case.entitie';
import { Person } from 'src/app/entities/person.entitie';
import { Document } from 'src/app/entities/document.entitie';
import { CourtCaseService } from 'src/app/services/court-case.service';
import { DocumentService } from 'src/app/services/document.service';
import { PersonService } from 'src/app/services/person.service';
import { DialogAddArticleCaseComponent } from '../dialog-add-article-case/dialog-add-article-case.component';
import { DialogAddCaseParticipantComponent } from '../dialog-add-case-participant/dialog-add-case-participant.component';
import { DialogAddEmployeeCaseComponent } from '../dialog-add-employee-case/dialog-add-employee-case.component';
import { DialogAddEpisodeComponent } from '../dialog-add-episode/dialog-add-episode.component';
import { DialogAddExpertiseComponent } from '../dialog-add-expertise/dialog-add-expertise.component';
import { DialogAddInspectorsCaseComponent } from '../dialog-add-inspectors-case/dialog-add-inspectors-case.component';
import { DialogAddProductionComponent } from '../dialog-add-production/dialog-add-production.component';
import { DialogAddThingCaseComponent } from '../dialog-add-thing-case/dialog-add-thing-case.component';
import { DialogEditProductionComponent } from '../dialog-edit-production/dialog-edit-production.component';
import { DialogAddInstigatorPrpductionComponent } from '../dialog-add-instigator-prpduction/dialog-add-instigator-prpduction.component';

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

  TypeInstance = TypeInstance;
  SolutionType = SolutionType;

  persons!: Person[];
  documents!: Document[];
  employees!: any[];

  constructor(
    private route: ActivatedRoute,
    private courtCaseService: CourtCaseService,
    public dialog: MatDialog,
    private personService: PersonService,
    private documentService: DocumentService
  ) {
    this.route.params
      .pipe(take(1))
      .subscribe(({ courtCaseId }) => (this.courtCaseId = courtCaseId));
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getCourtCase() {
    return this.courtCaseService
      .getCourtCase(this.courtCaseId)
      .pipe(take(1))
      .subscribe((c) => ((this.courtCase = c), (this.loaded = true)));
  }

  getEmployees() {
    return this.personService
      .getEmployees()
      .pipe(take(1))
      .subscribe((e) => {
        this.employees = e;
        this.getPersons();
      });
  }

  getDocuments() {
    return this.documentService
      .getDocuments()
      .pipe(take(1))
      .subscribe((d) => {
        this.documents = d;
        this.getCourtCase();
      });
  }

  getPersons() {
    return this.personService
      .getPersons()
      .pipe(take(1))
      .subscribe((p) => {
        this.persons = p;
        this.getDocuments();
      });
  }

  getEmployeesFullName(employeeId: number) {
    const personId = this.employees.find((e) => e.employeeId === employeeId)
      .personId;
    return this.persons.find((p) => p.personId === personId)?.fullName || '';
  }

  getEmployeesPost(employeeId: number) {
    return this.employees.find((e) => e.employeeId === employeeId).post || '';
  }

  getPersonFullName(personId: number) {
    return this.persons.find((p) => p.personId === personId)?.fullName || '';
  }

  openAddCaseParticipant() {
    this.dialog
      .open(DialogAddCaseParticipantComponent, {
        data: this.courtCaseId,
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => this.getCourtCase());
  }

  openAddArticleCase() {
    this.dialog
      .open(DialogAddArticleCaseComponent, {
        data: this.courtCaseId,
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => this.getCourtCase());
  }

  openAddEmployeeCase() {
    this.dialog
      .open(DialogAddEmployeeCaseComponent, {
        data: this.courtCaseId,
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => this.getCourtCase());
  }

  openAddEpisode() {
    this.dialog
      .open(DialogAddEpisodeComponent, {
        data: this.courtCaseId,
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => this.getCourtCase());
  }

  openAddExpertise() {
    this.dialog
      .open(DialogAddExpertiseComponent, {
        data: this.courtCaseId,
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => this.getCourtCase());
  }

  openAddInspectorsCase() {
    this.dialog
      .open(DialogAddInspectorsCaseComponent, {
        data: this.courtCaseId,
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => this.getCourtCase());
  }

  openAddProduction() {
    this.dialog
      .open(DialogAddProductionComponent, {
        data: this.courtCaseId,
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => this.getCourtCase());
  }

  openEditProduction(productionId: number) {
    this.dialog
      .open(DialogEditProductionComponent, {
        data: { productionId, courtCaseId: this.courtCaseId },
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => this.getCourtCase());
  }

  openAddThingCase() {
    this.dialog
      .open(DialogAddThingCaseComponent, {
        data: this.courtCaseId,
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => this.getCourtCase());
  }

  openAddInstigatorProduction(productionId: number) {
    this.dialog
      .open(DialogAddInstigatorPrpductionComponent, {
        data: { productionId, persons: this.persons },
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => this.getCourtCase());
  }
}
