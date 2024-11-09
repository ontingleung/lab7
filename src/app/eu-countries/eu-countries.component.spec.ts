import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuCountriesComponent } from './eu-countries.component';

describe('EuCountriesComponent', () => {
  let component: EuCountriesComponent;
  let fixture: ComponentFixture<EuCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
