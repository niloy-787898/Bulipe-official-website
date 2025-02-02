import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HRM_SECTION_CONTENT_DATA } from 'src/app-data/data/hrm-section-content.data';
import { SERVICE_MENU_DATA } from 'src/app-data/data/service-menu.data';
import { SERVICES_CONTENT_DATA } from 'src/app-data/data/services-content.data';
import { TITLE_CONTENT_DATA } from 'src/app-data/data/title-content.data';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';

const SERVICES_TITLE_INFO_KEY = makeStateKey<any>('servicesTitleInfo');
const SERVICE_PRODUCT_INFO_KEY = makeStateKey<any>('serviceProductInfo');
const PAGE_TITLE_INFO_KEY = makeStateKey<any>('pageTitleInfo');

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent
  extends BaseComponent
  implements OnDestroy, OnInit
{
  dynamicStateKey = makeStateKey<any>('serviceProductInfo');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'service-menu-data';
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
    this.route.params.subscribe((params: { [x: string]: any }) => {
      let ln = params['languageKey'];
      ln == undefined
        ? (ln = this.route.snapshot.parent?.paramMap.get('languageKey'))
        : ln;
    });
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
