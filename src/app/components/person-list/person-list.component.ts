import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Person } from 'src/app/entities/person.entitie';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  persons!: Person[];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.personService
      .getPersons()
      .pipe(take(1))
      .subscribe((p) => {
        this.persons = p;
      });
  }

  deletePerson(personId: number) {
    this.persons = this.persons.filter((p) => p.personId != personId);
  }
}
