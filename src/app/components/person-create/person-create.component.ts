import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss'],
})
export class PersonCreateComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    shortName: [null],
    fullName: ['', [Validators.required]],
    address: [null],
    tin: [null, [Validators.minLength(8), Validators.maxLength(10)]],
    isLegal: [0],
    passportData: [null, [Validators.minLength(10), Validators.maxLength(10)]],
    dateBirth: [null],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit(): void {}

  create() {
    this.personService.createOrEditPerson(this.form.value).subscribe(() => {
      this.router.navigate(['/persons']);
    });
  }
}
