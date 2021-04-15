import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss'],
})
export class ArticleCreateComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
    expertiseClass: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
