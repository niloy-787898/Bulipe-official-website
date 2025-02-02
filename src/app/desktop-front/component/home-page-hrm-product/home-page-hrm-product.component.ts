import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'web-home-page-hrm-product',
  templateUrl: './home-page-hrm-product.component.html',
  styleUrls: ['./home-page-hrm-product.component.scss'],
})
export class HomePageHrmProductComponent extends BaseComponent
implements OnDestroy, OnInit{
  dynamicStateKey = makeStateKey<any>('hrmTabs');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'hrm-section-data';
  dynamicPageData: any;
  dynamicConstentData: any;

  activeTab = 0;
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

  selectTab(index: number) {
    this.activeTab = index;
  }

  checkIfAnimated() {
    if (isPlatformBrowser(this.platformId)) {
      // Check if the code is running in the browser environment
      const accountingSectionElement =
        this.elementRef.nativeElement.querySelector('.hr-managment-section');
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
