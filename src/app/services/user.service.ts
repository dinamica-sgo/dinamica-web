import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;
	 
  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/dinamica/users';
  }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
 
  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

}
