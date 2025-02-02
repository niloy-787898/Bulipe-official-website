import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';

@Component({
  selector: 'web-home-page-accounting-product',
  templateUrl: './home-page-accounting-product.component.html',
  styleUrls: ['./home-page-accounting-product.component.scss'],
})
export class HomePageAccountingProductComponent
  extends BaseComponent
  implements OnDestroy, OnInit
{
  dynamicStateKey = makeStateKey<any>('accounts');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'acc-section-data';
  dynamicPageData: any;
  dynamicConstentData: any;

  isExpanded: boolean = false;
  public isAnimated = false;

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
        this.elementRef.nativeElement.querySelector('.accounting-section');
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
