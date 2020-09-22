import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from "../model/City";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cityUrl: string;
	 
  constructor(private http: HttpClient) {
    this.cityUrl = 'http://localhost:8080/dinamica/cities';
  }
 
  public findAll(): Observable<City[]> {
    return this.http.get<City[]>(this.cityUrl);
  }
 
  public save(city: City) {
    return this.http.post<City>(this.cityUrl, city);
  }

}
