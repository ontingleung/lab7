import { Injectable } from '@angular/core';
import { Eucountries } from './eucountries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  euCountries: Eucountries[] = [
    {
      code: 'AT',
      name: 'Austria',
      population: 8901064,
      capital: 'Vienna',
      flag: 'Flag_of_Austria.svg',
      officialLanguages: ['German'],
      currency: 'Euro'
    },
    {
      code: 'BE',
      name: 'Belgium',
      population: 11589623,
      capital: 'Brussels',
      flag: 'Flag_of_Belgium.svg',
      officialLanguages: ['Dutch', 'French', 'German'],
      currency: 'Euro'
    },
    {
      code: 'BG',
      name: 'Bulgaria',
      population: 6948445,
      capital: 'Sofia',
      flag: 'Flag_of_Bulgaria.svg',
      officialLanguages: ['Bulgarian'],
      currency: 'Lev'
    },
    {
      code: 'HR',
      name: 'Croatia',
      population: 4105267,
      capital: 'Zagreb',
      flag: 'Flag_of_Croatia.svg',
      officialLanguages: ['Croatian'],
      currency: 'Euro'
    },
    {
      code: 'CY',
      name: 'Cyprus',
      population: 1207359,
      capital: 'Nicosia',
      flag: 'Flag_of_Cyprus.svg',
      officialLanguages: ['Greek', 'Turkish'],
      currency: 'Euro'
    },
    {
      code: 'CZ',
      name: 'Czech Republic',
      population: 10708981,
      capital: 'Prague',
      flag: 'Flag_of_the_Czech_Republic.svg',
      officialLanguages: ['Czech'],
      currency: 'Czech koruna'
    },
    {
      code: 'DK',
      name: 'Denmark',
      population: 5831404,
      capital: 'Copenhagen',
      flag: 'Flag_of_Denmark.svg',
      officialLanguages: ['Danish'],
      currency: 'Danish krone'
    },
    {
      code: 'EE',
      name: 'Estonia',
      population: 1326535,
      capital: 'Tallinn',
      flag: 'Flag_of_Estonia.svg',
      officialLanguages: ['Estonian'],
      currency: 'Euro'
    },
    {
      code: 'FI',
      name: 'Finland',
      population: 5540720,
      capital: 'Helsinki',
      flag: 'Flag_of_Finland.svg',
      officialLanguages: ['Finnish', 'Swedish'],
      currency: 'Euro'
    },
    {
      code: 'FR',
      name: 'France',
      population: 67081000,
      capital: 'Paris',
      flag: 'Flag_of_France.svg',
      officialLanguages: ['French'],
      currency: 'Euro'
    },
    {
      code: 'DE',
      name: 'Germany',
      population: 83166711,
      capital: 'Berlin',
      flag: 'Flag_of_Germany.svg',
      officialLanguages: ['German'],
      currency: 'Euro'
    },
    {
      code: 'GR',
      name: 'Greece',
      population: 10715549,
      capital: 'Athens',
      flag: 'Flag_of_Greece.svg',
      officialLanguages: ['Greek'],
      currency: 'Euro'
    },
    {
      code: 'HU',
      name: 'Hungary',
      population: 9772756,
      capital: 'Budapest',
      flag: 'Flag_of_Hungary.svg',
      officialLanguages: ['Hungarian'],
      currency: 'Forint'
    },
    {
      code: 'IE',
      name: 'Ireland',
      population: 4994724,
      capital: 'Dublin',
      flag: 'Flag_of_Ireland.svg',
      officialLanguages: ['Irish', 'English'],
      currency: 'Euro'
    },
    {
      code: 'IT',
      name: 'Italy',
      population: 59554023,
      capital: 'Rome',
      flag: 'Flag_of_Italy.svg',
      officialLanguages: ['Italian'],
      currency: 'Euro'
    },
    {
      code: 'LV',
      name: 'Latvia',
      population: 1901548,
      capital: 'Riga',
      flag: 'Flag_of_Latvia.svg',
      officialLanguages: ['Latvian'],
      currency: 'Euro'
    },
    {
      code: 'LT',
      name: 'Lithuania',
      population: 2794700,
      capital: 'Vilnius',
      flag: 'Flag_of_Lithuania.svg',
      officialLanguages: ['Lithuanian'],
      currency: 'Euro'
    },
    {
      code: 'LU',
      name: 'Luxembourg',
      population: 634814,
      capital: 'Luxembourg City',
      flag: 'Flag_of_Luxembourg.svg',
      officialLanguages: ['Luxembourgish', 'French', 'German'],
      currency: 'Euro'
    },
    {
      code: 'MT',
      name: 'Malta',
      population: 514564,
      capital: 'Valletta',
      flag: 'Flag_of_Malta.svg',
      officialLanguages: ['Maltese', 'English'],
      currency: 'Euro'
    },
    {
      code: 'NL',
      name: 'Netherlands',
      population: 17441139,
      capital: 'Amsterdam',
      flag: 'Flag_of_the_Netherlands.svg',
      officialLanguages: ['Dutch'],
      currency: 'Euro'
    },
    {
      code: 'PL',
      name: 'Poland',
      population: 38386000,
      capital: 'Warsaw',
      flag: 'Flag_of_Poland.svg',
      officialLanguages: ['Polish'],
      currency: 'Zloty'
    },
    {
      code: 'PT',
      name: 'Portugal',
      population: 10276617,
      capital: 'Lisbon',
      flag: 'Flag_of_Portugal.svg',
      officialLanguages: ['Portuguese'],
      currency: 'Euro'
    },
    {
      code: 'RO',
      name: 'Romania',
      population: 19237691,
      capital: 'Bucharest',
      flag: 'Flag_of_Romania.svg',
      officialLanguages: ['Romanian'],
      currency: 'Romanian leu'
    },
    {
      code: 'SK',
      name: 'Slovakia',
      population: 5456362,
      capital: 'Bratislava',
      flag: 'Flag_of_Slovakia.svg',
      officialLanguages: ['Slovak'],
      currency: 'Euro'
    },
    {
      code: 'SI',
      name: 'Slovenia',
      population: 2100126,
      capital: 'Ljubljana',
      flag: 'Flag_of_Slovenia.svg',
      officialLanguages: ['Slovene'],
      currency: 'Euro'
    },
    {
      code: 'ES',
      name: 'Spain',
      population: 47351567,
      capital: 'Madrid',
      flag: 'Flag_of_Spain.svg',
      officialLanguages: ['Spanish'],
      currency: 'Euro'
    },
    {
      code: 'SE',
      name: 'Sweden',
      population: 10327589,
      capital: 'Stockholm',
      flag: 'Flag_of_Sweden.svg',
      officialLanguages: ['Swedish'],
      currency: 'Swedish krona'
    }
  ];

  getAllCountries(): Eucountries[] {
    return this.euCountries;
  }
  getCountryByCode(code: string): Eucountries | undefined {
    return this.euCountries.find((euCountries) => euCountries.code === code);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
  constructor() { }
}
