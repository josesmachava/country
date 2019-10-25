import { CountriesService } from './../countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
  <h1>hi</h1>
      <ul   *ngFor="let country of contries">
      <li>{{ country.name }}
  `,  
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public contries      = []
  constructor( private _countrieService:CountriesService) { }

  ngOnInit() {
   this._countrieService.getCountries()
      .subscribe( data => this.contries = data);  

  }

}
