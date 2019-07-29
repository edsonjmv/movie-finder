import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  items: string[] = [];

  itemsSubject: Subject<string[]>;
  itemClickSubject: Subject<string>;

  constructor() {
    this.itemsSubject = new Subject<string[]>();
    this.itemClickSubject = new Subject<string>();
  }

  getItems(): Observable<string[]> {
    return this.itemsSubject.asObservable();
  }

  clickItem(): Observable<string> {
    return this.itemClickSubject.asObservable();
  }

  addItem(item: string) {
    if (!this.items.includes(item)) {
      this.items.unshift(item);
    }
    this.itemsSubject.next(this.items);
  }

  emitClickItem(item: string) {
    this.itemClickSubject.next(item);
  }
}
