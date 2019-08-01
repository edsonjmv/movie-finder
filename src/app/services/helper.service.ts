import { Injectable } from '@angular/core';
import { Movie } from '../models/api-interfaces';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  PLACEHOLDER_IMAGE: string = 'https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png';

  generateItemsFromMovies(movies: Movie[]): Item[] {
    const items: Item[] = movies.map((movie: Movie) => {
      const { Poster, Year, Title, Type } = movie;

      const item = new Item(
        this.checkImage(Poster),
        this.formatText(Type, Year),
        Title
      );

      return item;
    })

    return [...items];
  }

  formatText(primaryText: string, secondaryText: string): string {
    let formatted: string = '';
    if (primaryText && secondaryText) {
      formatted = `${primaryText} | ${secondaryText}`;
    }
    return formatted;
  }

  checkImage(url: string): string {
    return !url || url === 'N/A' ? this.PLACEHOLDER_IMAGE : url;
  }
}
