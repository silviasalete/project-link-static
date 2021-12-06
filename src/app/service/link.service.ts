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

  listByUserId(id: number): Observable<Link[]> {
    return this.http.get<Link[]>(
      AppConstants.baseLinkFindAllByUserId(id),
      <Object>AppConstants.httpOptions
    );
  }

  listByDomain(domain: string): Observable<Link[]> {
    return this.http.get<Link[]>(AppConstants.baseLinkFindAllByDomain(domain));
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
