import { Component, Inject, PLATFORM_ID ,OnInit, OnDestroy, ElementRef} from '@angular/core';
import {  isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home-page-hero-area',
  templateUrl: './home-page-hero-area.component.html',
  styleUrls: ['./home-page-hero-area.component.scss'],
})
export class HomePageHeroAreaComponent extends BaseComponent
implements  OnDestroy, OnInit{

  dynamicStateKey = makeStateKey<any>('heroContents');
  dynamicDatabaseKey = 'hero-section';
  dynamicPageData: any ;
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicConstentData: any;

  constructor(
    private elementRef: ElementRef,
    langService: LanguageSwitcherService,
    @Inject(PLATFORM_ID) platformId: any,
    transferState: TransferState,
    public route: ActivatedRoute
  ) {
    super(langService, platformId, transferState);
    this.component = this;
  }


  isExpanded: boolean = false;
  public isAnimated = false;


  onCallNgOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Rest of your initialization logic
      this.checkIfAnimated();
      this.onLanguageChange();
    }
  }
  ngOnDestroy() {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(this.dynamicStateKey);
      this.transferState.remove(this.dynamicStateConstentKey);
    }
  }

  toggleAccordion() {
    this.isExpanded = !this.isExpanded;
  }
  checkIfAnimated() {
    if (isPlatformBrowser(this.platformId)) {
      // Check if the code is running in the browser environment
      const accountingSectionElement =
        this.elementRef.nativeElement.querySelector('.hero-section');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isAnimated = true;
            observer.disconnect();
          }
        });
      });

      if (accountingSectionElement) {
        observer.observe(accountingSectionElement);
      }
    }
  }

}
