import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionType } from "../model/TransactionType";

@Injectable({
  providedIn: 'root'
})
export class TransactionTypeService {

  private transactionTypeUrl: string;
	 
  constructor(private http: HttpClient) {
    this.transactionTypeUrl = 'http://localhost:8080/dinamica/transactionTypes';
  }
 
  public findAll(): Observable<TransactionType[]> {
    return this.http.get<TransactionType[]>(this.transactionTypeUrl);
  }
 
  public save(transactionType: TransactionType) {
    return this.http.post<TransactionType>(this.transactionTypeUrl, transactionType);
  }

}
