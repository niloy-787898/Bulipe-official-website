import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApplicationStateService {
  private isMobileResolution!: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.platformId = platformId;
    if (isPlatformBrowser(this.platformId)) {
      
      if (window.innerWidth < 800) {
        this.isMobileResolution = true;
      } else {
        this.isMobileResolution = false;
      }
    }
  }
  ngOnInit() {
    if (typeof document !== 'undefined') {
      console.log(window.innerWidth);
    }
  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}
