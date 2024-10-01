import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLandingPageComponent } from './doctor-landing-page.component';

describe('DoctorLandingPageComponent', () => {
  let component: DoctorLandingPageComponent;
  let fixture: ComponentFixture<DoctorLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
