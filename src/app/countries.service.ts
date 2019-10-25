import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountries } from './countries';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private _url:string = "https://restcountries.eu/rest/v2/all"
  constructor(private http:HttpClient) { }
  getCountries(): Observable<ICountries[]>{
   return this.http.get<ICountries[]>(this._url)
  }
}
