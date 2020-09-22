import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRole } from "../model/UserRole";

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private userRoleUrl: string;
	 
  constructor(private http: HttpClient) {
    this.userRoleUrl = 'http://localhost:8080/dinamica/userRoles';
  }
 
  public findAll(): Observable<UserRole[]> {
    return this.http.get<UserRole[]>(this.userRoleUrl);
  }
 
  public save(userRole: UserRole) {
    return this.http.post<UserRole>(this.userRoleUrl, userRole);
  }

}
