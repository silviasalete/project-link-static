import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Item, ItemPageable } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  list(): Observable<ItemPageable> {
    return this.http.get<ItemPageable>(
      AppConstants.baseItemPageSort(0, 10, 'desc')
    );
  }
  save(request: Item): Observable<Item> {
    return this.http.post<Item>(
      AppConstants.baseItemSave,
      request,
      <Object>AppConstants.httpOptions
    );
  }
  update(request: Item): Observable<Item> {
    return this.http.put<Item>(
      AppConstants.baseItemUpdate,
      JSON.stringify(request),
      <Object>AppConstants.httpOptions
    );
  }
  findById(id: number): Observable<Item> {
    return this.http.get<Item>(AppConstants.baseItemFindById(id));
  }
  delete(id: number): Observable<any> {
    return this.http.delete(AppConstants.baseItemDelete(id));
  }
}
