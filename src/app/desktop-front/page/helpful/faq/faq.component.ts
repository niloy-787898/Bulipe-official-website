import { Component, OnInit, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { PRODUCT_FAQ_DATA } from 'src/app-data/data/product-faq.data';
import { PRODUCT_GLANCE_DATA } from 'src/app-data/data/product-glance.data';
import { SERVICE_MENU_DATA } from 'src/app-data/data/service-menu.data';
import { TITLE_CONTENT_DATA } from 'src/app-data/data/title-content.data';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';

const SERVICE_PRODUCT_INFO_KEY = makeStateKey<any>('serviceProductInfoData');
const TABS_KEY = makeStateKey<any>('tabsData');
const FAQ_PRODUCT_INFO_KEY = makeStateKey<any>('faqProductInfoData');

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
// product-wise-faq
export class FaqComponent extends BaseComponent
implements OnDestroy, OnInit{

  dynamicStateKey = makeStateKey<any>('blogCartContentData');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'product-wise-faq';
  dynamicPageData: any;
  dynamicFullPageData: any;
  dynamicConstentData: any;
  serviceProductInfo: any;
  
  activeTab = 0;

  constructor(
    langService: LanguageSwitcherService,
    @Inject(PLATFORM_ID) platformId: any,
    transferState: TransferState,
    public route: ActivatedRoute,
  ) {
    super(langService, platformId, transferState);
    this.component = this;
  }
  onCallNgOnInit() {
    this.onLanguageChange();
    this.serviceProductInfo = this.dynamicFullPageData['service-menu-data'];
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
  toggleAccordion(index: number) {
    this.serviceProductInfo.forEach(
      (productInfo: { expanded: boolean }, i: number) => {
        if (i === index) {
          productInfo.expanded = !productInfo.expanded;
        } else {
          productInfo.expanded = false;
        }
      }
    );
  }
  toggleAccordion2(outerIndex: number, innerIndex: number) {
    this.dynamicPageData.forEach((productInfo: any, i: number) => {
      if (i === outerIndex) {
        productInfo.accordian.forEach((productsubInfo: any, j: number) => {
          if (j === innerIndex) {
            productsubInfo.expanded = !productsubInfo.expanded;
          } else {
            productsubInfo.expanded = false;
          }
        });
      } else {
        productInfo.accordian.forEach((productsubInfo: any) => {
          productsubInfo.expanded = false;
        });
      }
    });
  }
}
