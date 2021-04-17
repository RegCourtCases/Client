import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { Person } from 'src/app/entities/person.entitie';
import { CourtCaseService } from 'src/app/services/court-case.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-dialog-add-thing-case',
  templateUrl: './dialog-add-thing-case.component.html',
  styleUrls: ['./dialog-add-thing-case.component.scss'],
})
export class DialogAddThingCaseComponent implements OnInit {
  public persons!: Person[];
  public filteredPersons!: Observable<any[]>;

  public form: FormGroup = this.fb.group({
    courtCaseId: [null],
    name: [null, [Validators.required]],
    ownerId: [null, [Validators.required]],
    description: [null],
    storageLocation: [null],
    fileLink: [null],
  });
  constructor(
    public dialogRef: MatDialogRef<DialogAddThingCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder,
    private personService: PersonService,
    private courtCaseService: CourtCaseService
  ) {
    this.form.controls.courtCaseId.setValue(+this.courtCaseId);
  }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.personService
      .getPersons()
      .pipe(take(1))
      .subscribe((ps) => {
        this.persons = ps;
        this.filteredPersons = this.form.controls.ownerId.valueChanges.pipe(
          startWith(''),
          map((value) => this._filter(value))
        );
      });
  }

  private _filter(value: string | number): Person[] {
    if (typeof value === 'string') {
      const filterValue = value?.toLowerCase();
      return this.persons.filter((person) =>
        person.fullName.toLowerCase().includes(filterValue)
      );
    } else {
      const person = this.persons.find((p) => p.personId === value);
      return person ? [person] : [];
    }
  }

  displayFn(personId: number): string {
    return this.persons?.find((p) => p.personId === personId)?.fullName || '';
  }

  create() {
    this.courtCaseService
      .createOrEditThingsCases(this.form.value)
      .pipe(take(1))
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
