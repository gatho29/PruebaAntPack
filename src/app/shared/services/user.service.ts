import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: user

  constructor(private http: HttpClient
  ) { }

//Servicio para obtener lista de usuarios
  getUsers(): Observable<user[]> {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users');
  }
}
