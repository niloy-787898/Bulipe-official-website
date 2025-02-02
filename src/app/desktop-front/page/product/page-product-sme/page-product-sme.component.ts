import { Component, OnInit, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import {  isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-product-sme',
  templateUrl: './page-product-sme.component.html',
  styleUrls: ['./page-product-sme.component.scss'],
})

export class PageProductSmeComponent extends BaseComponent
implements OnDestroy, OnInit{

  dynamicStateKey = makeStateKey<any>('smeProductInfo');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'sme-product-menu-data';
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
