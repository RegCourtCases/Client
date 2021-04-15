import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Document } from 'src/app/entities/document.entitie';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnInit {
  documents!: Document[];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.documentService
      .getDocuments()
      .pipe(take(1))
      .subscribe((d) => {
        this.documents = d;
      });
  }

  delete(documentId: number) {
    this.documents = this.documents.filter((d) => d.documentId !== documentId);
  }
}
