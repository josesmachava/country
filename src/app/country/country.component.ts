import { CountriesService } from './../countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl:'/country.component.html',  
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
