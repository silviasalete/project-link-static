import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  getInfoToken(info: string): string {
    const token = window.localStorage.getItem('token');
    let decoded: any = null;
    if (token) {
      decoded = jwtDecode(token);
    } else {
      return 'Token não existe';
    }
    switch (info) {
      case 'exp':
        return decoded.exp;
      case 'id':
        return decoded.id;
      case 'name':
        return decoded.name;
      case 'email':
        return decoded.email;
      default:
        return `O parametro: ${info} não é um atributo do Token `;
    }
  }

  getAuthorizaionToken() {
    const token = window.localStorage.getItem('token');

    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwtDecode(token);

    if (decoded.exp === undefined) {
      // return null;
      return new Date(0);
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);

    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn(): boolean {
    const token = this.getAuthorizaionToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  logout() {
    window.localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
