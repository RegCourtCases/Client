import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent implements OnInit {

  
  public form: FormGroup = this.fb.group({
    shortName: [''],
    fullName: ['', [Validators.required]],
    address: [''],
    tin: ['', [Validators.minLength(8), Validators.maxLength(10)]],
    typePerson: [0],
    passportData: ['', [Validators.minLength(10), Validators.maxLength(10)]],
    dateBirth: [''],
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
