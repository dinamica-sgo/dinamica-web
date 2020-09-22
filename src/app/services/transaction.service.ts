import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Transaction } from "../model/Transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  
  private transactionUrl: string;
  mensaje: string;
  private mensajeSubject = new Subject<string>();
  enviarMensajeObservable = this.mensajeSubject.asObservable(); 
  
	 
  constructor(private http: HttpClient) {
    this.transactionUrl = 'http://localhost:8080/dinamica/transactions';
  }
 
  public findAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl);
  }
 
  public save(transaction: Transaction) {
    return this.http.post<Transaction>(this.transactionUrl, transaction);
  }

  public getCash(): number {
    return 10000;
  }

  public getAvailable(): number {
    return 16000;
  }

  public getLoan(): number {
    return 12000;
  }

  enviarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    this.mensajeSubject.next(mensaje);
  }
}
