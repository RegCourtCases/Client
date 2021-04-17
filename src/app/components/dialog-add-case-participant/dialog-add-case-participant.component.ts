import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { Person } from 'src/app/entities/person.entitie';
import { CourtCaseService } from 'src/app/services/court-case.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-dialog-add-case-participant',
  templateUrl: './dialog-add-case-participant.component.html',
  styleUrls: ['./dialog-add-case-participant.component.scss'],
})
export class DialogAddCaseParticipantComponent implements OnInit {
  public persons!: Person[];
  public filteredPersons!: Observable<any[]>;

  public form: FormGroup = this.fb.group({
    courtCaseId: [null],
    personId: [null, [Validators.required]],
    role: [null],
    placeWork: [null],
  });
  constructor(
    public dialogRef: MatDialogRef<DialogAddCaseParticipantComponent>,
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
        this.persons = ps.filter((p) => !p.isLegal);
        this.filteredPersons = this.form.controls.personId.valueChanges.pipe(
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
      .createOrEditCaseParticipants(this.form.value)
      .pipe(take(1))
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
