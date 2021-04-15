import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss'],
})
export class PersonCreateComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    shortName: [''],
    fullName: ['', [Validators.required]],
    address: [''],
    tin: ['', [Validators.minLength(8), Validators.maxLength(10)]],
    typePerson: [0],
    passportData: ['', [Validators.minLength(10), Validators.maxLength(10)]],
    dateBirth: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
