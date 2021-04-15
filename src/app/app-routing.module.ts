import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { CourtCasesCreateComponent } from './components/court-cases-create/court-cases-create.component';
import { CourtCasesEditComponent } from './components/court-cases-edit/court-cases-edit.component';
import { CourtCasesListComponent } from './components/court-cases-list/court-cases-list.component';
import { DocumentCreateComponent } from './components/document-create/document-create.component';
import { DocumentEditComponent } from './components/document-edit/document-edit.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonViewComponent } from './components/person-view/person-view.component';

const routes: Routes = [
  {
    path: 'persons',
    component: PersonListComponent,
  },
  {
    path: 'person',
    children: [
      {
        path: 'create',
        component: PersonCreateComponent,
      },
      {
        path: 'edit/:personId',
        component: PersonEditComponent,
      },
      {
        path: 'view/:personId',
        component: PersonViewComponent,
      },
      { path: '**', redirectTo: 'persons', pathMatch: 'prefix' },
    ],
  },
  {
    path: 'courtcases',
    component: CourtCasesListComponent,
  },
  {
    path: 'courtcase',
    children: [
      {
        path: 'create',
        component: CourtCasesCreateComponent,
      },
      {
        path: 'edit/:categoryName',
        component: CourtCasesEditComponent,
      },
      { path: '**', redirectTo: 'courtcases', pathMatch: 'prefix' },
    ],
  },
  {
    path: 'documents',
    component: DocumentListComponent,
  },
  {
    path: 'document',
    children: [
      {
        path: 'create',
        component: DocumentCreateComponent,
      },
      {
        path: 'edit/:documentId',
        component: DocumentEditComponent,
      },
      {
        path: 'view/:documentId',
        children: [
          {
            path: '',
            component: ArticleListComponent,
          },
          {
            path: 'article/create',
            component: ArticleCreateComponent,
          },
          {
            path: 'article/edit/:articleId',
            component: ArticleEditComponent,
          },
        ],
      },
      { path: '**', redirectTo: 'documents', pathMatch: 'prefix' },
    ],
  },
  { path: '**', redirectTo: 'persons', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
