import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  items: string[] = [];

  itemsSubject: Subject<string[]>;
  itemClickSubject: Subject<string>;
  activeItemSubject: Subject<string>;

  constructor() {
    this.itemsSubject = new Subject<string[]>();
    this.itemClickSubject = new Subject<string>();
    this.activeItemSubject = new Subject<string>();
  }

  getItems(): Observable<string[]> {
    return this.itemsSubject.asObservable();
  }

  clickItem(): Observable<string> {
    return this.itemClickSubject.asObservable();
  }

  getActiveItem(): Observable<string> {
    return this.activeItemSubject.asObservable();
  }

  addItem(item: string) {
    if (!this.items.includes(item)) {
      this.items.unshift(item);
    }
    this.itemsSubject.next(this.items);
    this.activateItem(item);
  }

  emitClickItem(item: string) {
    this.itemClickSubject.next(item);
  }

  activateItem(item: string) {
    this.activeItemSubject.next(item);
  }
}
