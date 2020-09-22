import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Address } from '../model/Address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  
  private addressUrl: string;
	 
  constructor(private http: HttpClient) {
    this.addressUrl = 'http://localhost:8080/dinamica/address';
  }
 
  public findAll(): Observable<Address[]> {
    return this.http.get<Address[]>(this.addressUrl);
  }
 
  public save(address: Address) {
    return this.http.post<Address>(this.addressUrl, address);
  }
}
