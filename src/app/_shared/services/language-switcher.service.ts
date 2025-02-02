import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
import { Language } from '../_interface/language.interface';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LanguageSwitcherService {
  private lnKey = 'ln';
  private dirKey = '_dir';
  private lsSubject: BehaviorSubject<Storage | null>;
  public ls$: any; //= this.lsSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: object,  private http: HttpClient) {
    if (isPlatformBrowser(this.platformId)) {
      this.lsSubject = new BehaviorSubject<Storage | null>(localStorage);
      this.ls$ = this.lsSubject.asObservable();
    } else {
      this.lsSubject = new BehaviorSubject<Storage | null>(null);
    }
  }
  setLanguage(ln: Language): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.lnKey, ln.key);
      localStorage.setItem(this.dirKey, ln.direction);
      this.lsSubject.next(localStorage);
    }
  }
  getLanguage(): string | 'en' | 'bn' {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.lnKey) ?? 'en';
    } else {
      return 'en';
    }
  }
  getDirection(): string | 'ltr' | 'rtl' {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.dirKey) ?? 'ltr';
    } else {
      return 'ltr';
    }
  }
  reInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.lsSubject.next(localStorage);
    }
  }
  clear(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
      this.lsSubject.next(localStorage);
    }
  }
}
