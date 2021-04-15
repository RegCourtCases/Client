import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent implements OnInit {
  public loaded = false;
  public form: FormGroup = this.fb.group({
    personId: [null],
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
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {
    this.route.params.pipe(take(1)).subscribe(({ personId }) => {
      this.form.controls.personId.setValue(personId);
    });
  }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson() {
    this.personService.getPerson(this.form.value.personId).subscribe((p) => {
      this.form.patchValue(p);
      this.loaded = true;
    });
  }

  edit() {
    this.personService.createOrEditPerson(this.form.value).subscribe(() => {
      this.router.navigate(['/persons']);
    });
  }
}
