import { CountriesService } from './../countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template:`
  <div class="container">
  <div class="row">
      <h1>Countries </h1>
      <div class="col-md-3 country"  *ngFor="let country of contries">
              <ul  >
                      <li>Name: {{ 
                              country.name}}</li>
                          
                          <li>Capital:{{ country.capital
                          }}</li>
                  <li>Region:{{ country.region
                  }}</li>
                  
                  <li>Subregion:{{country.subregion
                  }}</li>
                  
                  <li>Population:{{ country.population 
                  }}</li>
                  
                  <li>Area:{{ country.area
                  }}</li>
                  
                  <li>Tomezones:{{country.timezones|slice:0:2 }}</li>
                  
                  <li>Native name:{{ country.nativeName}}</li>
                  <a href="{{ country.flag}}" target="_blank"> <img src="{{ country.flag }}" alt="">
                  </a>
              
              </ul>   
      </div>
  </div>
</div>





  
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
