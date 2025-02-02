import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';

const TABS_KEY = makeStateKey<any>('tabsData');
const PAGE_TITLE_INFO_KEY = makeStateKey<any>('pageTitleInfo');

@Component({
  selector: 'web-home-page-product-at-a-glance',
  templateUrl: './home-page-product-at-a-glance.component.html',
  styleUrls: ['./home-page-product-at-a-glance.component.scss'],
})
export class HomePageProductAtAGlanceComponent
  extends BaseComponent
  implements OnDestroy, OnInit
{
  dynamicStateKey = makeStateKey<any>('tabsData');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'product-glance-section-data';
  dynamicPageData: any;
  dynamicConstentData: any;

  activeTab = 0;

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
    this.onLanguageChange();
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
}
