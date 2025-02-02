import { Component, OnInit, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { CRM_PRODUCT_MENU_DATA } from 'src/app-data/data/crm-product-menu.data';
import { PRODUCT_CONTENT_DATA } from 'src/app-data/data/product-content.data';
import { RELATED_PRODUCT_CONTENT_DATA } from 'src/app-data/data/related-product-content.data';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';

const PRODUCT_TITLE_INFO_KEY = makeStateKey<any>('productTitleInfo');
const CRM_PRODUCT_INFO_KEY = makeStateKey<any>('crmProductInfo');
const RELATED_PRODUCTS_KEY = makeStateKey<any>('relatedProducts');

@Component({
  selector: 'web-page-product-crm',
  templateUrl: './page-product-crm.component.html',
  styleUrls: ['./page-product-crm.component.scss']
})

export class PageProductCrmComponent extends BaseComponent
implements OnDestroy, OnInit{

  dynamicStateKey = makeStateKey<any>('crmProductInfo');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'crm-product-menu-data';
  dynamicPageData: any;
  dynamicFullPageData: any;
  dynamicConstentData: any;
  relatedProducts: any ;


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
    this.relatedProducts = this.dynamicFullPageData['related-product-data']
  }
  ngOnDestroy() {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(this.dynamicStateKey);
      this.transferState.remove(this.dynamicStateConstentKey);
    }
  }
  

  toggleAccordion(index: number) {
    this.dynamicPageData.forEach(
      (productInfo: { expanded: boolean }, i: number) => {
        if (i === index) {
          productInfo.expanded = !productInfo.expanded;
        } else {
          productInfo.expanded = false;
        }
      }
    );
  }
  getGridOrder(index: number): string {
    return index % 2 === 0 ? 'order-even' : 'order-odd';
  }
}
