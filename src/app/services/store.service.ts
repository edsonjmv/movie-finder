import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private searchList: string[] = [];

  private listSubject: Subject<string[]>;

  constructor() {
    this.listSubject = new Subject<string[]>();
  }

  public getSearchList(): Observable<string[]> {
    return this.listSubject.asObservable();
  }

  public addSearch(search: string) {
    this.searchList.unshift(search);
    this.listSubject.next(this.searchList);
  }
}
