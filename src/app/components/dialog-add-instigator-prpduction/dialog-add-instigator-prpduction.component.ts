import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { Person } from 'src/app/entities/person.entitie';
import { CourtCaseService } from 'src/app/services/court-case.service';

@Component({
  selector: 'app-dialog-add-instigator-prpduction',
  templateUrl: './dialog-add-instigator-prpduction.component.html',
  styleUrls: ['./dialog-add-instigator-prpduction.component.scss'],
})
export class DialogAddInstigatorPrpductionComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    productionId: [null],
    personId: [null, [Validators.required]],
  });

  public type = 0;

  public persons!: Person[];
  public filteredPersons!: Observable<any[]>;

  constructor(
    public dialogRef: MatDialogRef<DialogAddInstigatorPrpductionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private courtCaseService: CourtCaseService
  ) {
    this.form.controls.productionId.setValue(+data.productionId);
    this.persons = data.persons;
  }

  ngOnInit(): void {
    this.filteredPersons = this.form.controls.personId.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
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
    const send =
      this.type == 0
        ? this.courtCaseService.createOrEditPlaintiffs
        : this.type == 1
        ? this.courtCaseService.createOrEditRespondents
        : this.type == 2
        ? this.courtCaseService.createOrEditInterestedParties
        : this.courtCaseService.createOrEditThirdParties;

    send.bind(this.courtCaseService)(this.form.value)
      .pipe(take(1))
      .subscribe(() => this.dialogRef.close());
  }
}
