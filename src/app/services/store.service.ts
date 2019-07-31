import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  items: string[] = [];

  items$ = new Subject<string[]>();
  itemClick$ = new Subject<string>();
  activeItem$ = new Subject<string>();

  getItems(): Observable<string[]> {
    return this.items$.asObservable();
  }

  clickItem(): Observable<string> {
    return this.itemClick$.asObservable();
  }

  getActiveItem(): Observable<string> {
    return this.activeItem$.asObservable();
  }

  addItem(item: string) {
    if (!this.items.includes(item)) {
      this.items.unshift(item);
    }
    this.items$.next(this.items);
    this.activateItem(item);
  }

  emitClickItem(item: string) {
    this.itemClick$.next(item);
  }

  activateItem(item: string) {
    this.activeItem$.next(item);
  }
}
