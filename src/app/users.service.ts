import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  myUrl = "http://localhost:3000/";

  getUsers(): Observable<any> {
    return this.httpClient.get(this.myUrl+"users");
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.myUrl +"users/" + id);
  }

  addNewUser(model): Observable<any> {
    debugger;
    return this.httpClient.post(
      this.myUrl +"users",
      model
    );
  }

  updateUser(user: User): Observable<any> {
    return this.httpClient.put(this.myUrl+"users/"+ user.id, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(this.myUrl+"users/" + id);
  }
}
