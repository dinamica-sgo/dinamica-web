import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from "../model/Branch";

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private branchUrl: string;
	 
  constructor(private http: HttpClient) {
    this.branchUrl = 'http://localhost:8080/dinamica/branches';
  }
 
  public findAll(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.branchUrl);
  }
 
  public save(branch: Branch) {
    return this.http.post<Branch>(this.branchUrl, branch);
  }

}
