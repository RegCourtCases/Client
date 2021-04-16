import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtCasesViewComponent } from './court-cases-view.component';

describe('CourtCasesViewComponent', () => {
  let component: CourtCasesViewComponent;
  let fixture: ComponentFixture<CourtCasesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtCasesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtCasesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
