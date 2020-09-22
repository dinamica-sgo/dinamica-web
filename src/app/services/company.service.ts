import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from "../model/Company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companyUrl: string;
  company: Company;
   
  constructor(private http: HttpClient) {
    this.companyUrl = 'http://localhost:8080/dinamica/companies/';
  }
 
  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }
 
  public findById(id: number): Observable<Company> {
    return this.http.get<Company>(this.companyUrl + '/' + id);
  }

  public save(company: Company) {
    return this.http.post<Company>(this.companyUrl, company);
  }

}
