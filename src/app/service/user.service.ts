import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Token } from '../models/token.entities';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  createAccount(request: User): Observable<User> {
    return this.httpClient.post<User>(
      AppConstants.baseUserSave,
      JSON.stringify(request),
      <Object>AppConstants.httpOptions
    );
  }

  login(request: User): Observable<Token> {
    return this.httpClient.post<Token>(
      AppConstants.baseAuth,
      JSON.stringify(request),
      <Object>AppConstants.httpOptions
    );
  }

  findUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(AppConstants.baseUserFindById(id));
  }
}
