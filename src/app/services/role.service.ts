import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from "../model/Role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roleUrl: string;
	 
  constructor(private http: HttpClient) {
    this.roleUrl = 'http://localhost:8080/dinamica/roles';
  }
 
  public findAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.roleUrl);
  }
 
  public save(role: Role) {
    return this.http.post<Role>(this.roleUrl, role);
  }

}
