import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss'],
})
export class ArticleCreateComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    documentId: [null],
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
    expertiseClass: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private acticleService: ArticleService
  ) {
    this.route.params.pipe(take(1)).subscribe(({ documentId }) => {
      this.form.controls.documentId.setValue(documentId);
    });
  }

  ngOnInit(): void {}

  create() {
    this.acticleService.createOrEdit(this.form.value).subscribe(() => {
      this.router.navigate(['/document/view', this.form.value.documentId]);
    });
  }
}
