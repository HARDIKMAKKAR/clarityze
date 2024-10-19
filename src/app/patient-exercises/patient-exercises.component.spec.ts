import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientExercisesComponent } from './patient-exercises.component';

describe('PatientExercisesComponent', () => {
  let component: PatientExercisesComponent;
  let fixture: ComponentFixture<PatientExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientExercisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
