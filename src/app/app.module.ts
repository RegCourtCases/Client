import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { CourtCasesListComponent } from './components/court-cases-list/court-cases-list.component';
import { CourtCasesCreateComponent } from './components/court-cases-create/court-cases-create.component';
import { CourtCasesEditComponent } from './components/court-cases-edit/court-cases-edit.component';
import { PersonViewComponent } from './components/person-view/person-view.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentEditComponent } from './components/document-edit/document-edit.component';
import { DocumentCreateComponent } from './components/document-create/document-create.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { PersonService } from './services/person.service';
import { HttpClientModule } from '@angular/common/http';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { DocumentService } from './services/document.service';
import { EmptyToNullDirective } from './directives/empty-to-null.directive';
import { ArticleService } from './services/article.service';
import { CourtCaseService } from './services/court-case.service';
import { CourtCasesViewComponent } from './components/court-cases-view/court-cases-view.component';
import { DialogAddEpisodeComponent } from './components/dialog-add-episode/dialog-add-episode.component';
import { DialogAddExpertiseComponent } from './components/dialog-add-expertise/dialog-add-expertise.component';
import { DialogAddThingCaseComponent } from './components/dialog-add-thing-case/dialog-add-thing-case.component';
import { DialogAddProductionComponent } from './components/dialog-add-production/dialog-add-production.component';
import { DialogAddCaseParticipantComponent } from './components/dialog-add-case-participant/dialog-add-case-participant.component';
import { DialogAddArticleCaseComponent } from './components/dialog-add-article-case/dialog-add-article-case.component';
import { DialogAddInspectorsCaseComponent } from './components/dialog-add-inspectors-case/dialog-add-inspectors-case.component';
import { DialogAddEmployeeCaseComponent } from './components/dialog-add-employee-case/dialog-add-employee-case.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DialogEditProductionComponent } from './components/dialog-edit-production/dialog-edit-production.component';
import { DialogAddInstigatorPrpductionComponent } from './components/dialog-add-instigator-prpduction/dialog-add-instigator-prpduction.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonCreateComponent,
    PersonEditComponent,
    CourtCasesListComponent,
    CourtCasesCreateComponent,
    CourtCasesEditComponent,
    PersonViewComponent,
    DocumentListComponent,
    DocumentEditComponent,
    DocumentCreateComponent,
    ArticleCreateComponent,
    ArticleListComponent,
    ArticleEditComponent,
    EmptyToNullDirective,
    CourtCasesViewComponent,
    DialogAddEpisodeComponent,
    DialogAddExpertiseComponent,
    DialogAddThingCaseComponent,
    DialogAddProductionComponent,
    DialogAddCaseParticipantComponent,
    DialogAddArticleCaseComponent,
    DialogAddInspectorsCaseComponent,
    DialogAddEmployeeCaseComponent,
    DialogEditProductionComponent,
    DialogAddInstigatorPrpductionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatCheckboxModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    VirtualScrollerModule,
    MatAutocompleteModule,
  ],
  providers: [
    DatePipe,
    PersonService,
    DocumentService,
    ArticleService,
    CourtCaseService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
