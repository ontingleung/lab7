import {Component, inject} from '@angular/core';
import { EuCountriesComponent } from '../eu-countries/eu-countries.component';
import { Eucountries } from '../eucountries';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EuCountriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  euCountries: Eucountries[] = [
    
  ];

  countriesService: CountriesService = inject(CountriesService);
  filteredCountryList: Eucountries[] = [];
  constructor() {
    this.euCountries = this.countriesService.getAllCountries();
    
  }

}

