import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Fee } from "../model/Fee";

@Injectable({
  providedIn: 'root'
})
export class FeeService {
  private feeUrl: string;
	 
  constructor(private http: HttpClient) {
    this.feeUrl = 'http://localhost:8080/dinamica/fees';
  }
 
  public findAll(): Observable<Fee[]> {
    return this.http.get<Fee[]>(this.feeUrl);
  }
 
  public save(fee: Fee) {
    return this.http.post<Fee>(this.feeUrl, fee);
  }

}
