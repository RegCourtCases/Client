import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
})
export class ArticleEditComponent implements OnInit {
  public loaded: boolean = false;

  public form: FormGroup = this.fb.group({
    documentId: [null],
    articleId: [null],
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
    expertiseClass: [''],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private acticleService: ArticleService
  ) {
    this.route.params.pipe(take(1)).subscribe(({ documentId, articleId }) => {
      this.form.controls.documentId.setValue(documentId);
      this.form.controls.articleId.setValue(articleId);
    });
  }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle() {
    this.acticleService.getActicle(this.form.value.articleId).subscribe((a) => {
      this.form.patchValue(a);
      this.loaded = true;
    });
  }

  edit() {
    this.acticleService.createOrEdit(this.form.value).subscribe(() => {
      this.router.navigate(['/document/view', this.form.value.documentId]);
    });
  }
}
