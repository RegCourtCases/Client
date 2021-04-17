import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { CourtCaseService } from 'src/app/services/court-case.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-dialog-add-employee-case',
  templateUrl: './dialog-add-employee-case.component.html',
  styleUrls: ['./dialog-add-employee-case.component.scss'],
})
export class DialogAddEmployeeCaseComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    courtCaseId: [null],
    employeeId: [null, [Validators.required]],
  });

  public employees: any;
  public filtered!: Observable<any[]>;

  constructor(
    public dialogRef: MatDialogRef<DialogAddEmployeeCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder,
    private perosnService: PersonService,
    private courtCaseService: CourtCaseService
  ) {
    this.form.controls.courtCaseId.setValue(+this.courtCaseId);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.perosnService
      .getPersons()
      .pipe(take(1))
      .subscribe((ps) => {
        this.perosnService
          .getEmployees()
          .pipe(take(1))
          .subscribe((es: any) => {
            this.employees = es.map((e: any) => {
              e.person = ps.find((p) => p.personId === e.personId);
              return e;
            });
            this.filtered = this.form.controls.employeeId.valueChanges.pipe(
              startWith(''),
              map((value) => this._filter(value))
            );
          });
      });
  }

  private _filter(value: string | number): any[] {
    if (typeof value === 'string') {
      const filterValue = value?.toLowerCase();
      return this.employees.filter((e: any) =>
        e.person.fullName.toLowerCase().includes(filterValue)
      );
    } else {
      const employee = this.employees.find((e: any) => e.employeeId === value);
      return employee ? [employee] : [];
    }
  }

  displayFn(employeeId: number): string {
    return (
      this.employees?.find((e: any) => e.employeeId === employeeId)?.person
        ?.fullName || ''
    );
  }

  create() {
    this.courtCaseService
      .createOrEditEmployeesCases(this.form.value)
      .pipe(take(1))
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
