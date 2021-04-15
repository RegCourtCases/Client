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
  ],
  providers: [DatePipe, PersonService, DocumentService, ArticleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
