import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Link, LinkPageable } from '../models/link';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  constructor(private http: HttpClient) {}

  list(id: number): Observable<Link[]> {
    return this.http.get<Link[]>(
      AppConstants.baseLinkFindAllById(id),
      <Object>AppConstants.httpOptions
    );
  }
  save(request: any): Observable<Link> {
    return this.http.post<Link>(
      AppConstants.baseLinkSave,
      request,
      <Object>AppConstants.httpOptions
    );
  }
  update(request: Link): Observable<Link> {
    return this.http.put<Link>(
      AppConstants.baseLinkUpdate,
      JSON.stringify(request),
      <Object>AppConstants.httpOptions
    );
  }
  findById(id: number): Observable<Link> {
    return this.http.get<Link>(AppConstants.baseLinkFindById(id));
  }
  delete(id: number): Observable<any> {
    return this.http.delete(AppConstants.baseLinkDelete(id));
  }
}
