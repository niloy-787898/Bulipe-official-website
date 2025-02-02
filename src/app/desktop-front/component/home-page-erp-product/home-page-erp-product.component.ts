import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'web-home-page-erp-product',
  templateUrl: './home-page-erp-product.component.html',
  styleUrls: ['./home-page-erp-product.component.scss'],
})
export class HomePageErpProductComponent extends BaseComponent
implements OnDestroy, OnInit{
  dynamicStateKey = makeStateKey<any>('accounts');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'erp-section-data';
  dynamicPageData: any;
  dynamicConstentData: any;

  isExpanded: boolean = false;
  public isAnimated = false;

  constructor(
    langService: LanguageSwitcherService,
    @Inject(PLATFORM_ID) platformId: any,
    transferState: TransferState,
    public route: ActivatedRoute
  ) {
    super(langService, platformId, transferState);
    this.component = this;
  }
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
      const erpSectionElement = document.querySelector('.accounting-section');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isAnimated = true;
            observer.disconnect();
          }
        });
      });

      if (erpSectionElement) {
        observer.observe(erpSectionElement);
      }
    }
  }
}
