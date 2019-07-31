import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  PLACEHOLDER_IMAGE: string = 'https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png';

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
