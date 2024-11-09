import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Eucountries } from '../eucountries';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-eu-countries',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './eu-countries.component.html',
  styleUrls: ['./eu-countries.component.css']
})
export class EuCountriesComponent {
  @Input() euCountries!: Eucountries[];
}
