import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Province } from "../model/Province";

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private provinceUrl: string;
	 
  constructor(private http: HttpClient) {
    this.provinceUrl = 'http://localhost:8080/dinamica/provinces';
  }
 
  public findAll(): Observable<Province[]> {
    return this.http.get<Province[]>(this.provinceUrl);
  }
 
  public save(province: Province) {
    return this.http.post<Province>(this.provinceUrl, province);
  }

}
