import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  OnDestroy,
} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ABOUT_CONTENT_DATA } from 'src/app-data/data/about-content.data';
import { ABOUT_MENU_DATA } from 'src/app-data/data/about-menu.data';
import { TEAMS_CONTENT_DATA } from 'src/app-data/data/teams-content.data';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';

const ABOUT_TITLE_INFO_KEY = makeStateKey<any>('aboutTitleInfo');
const ABOUT_INFO_KEY = makeStateKey<any>('aboutInfo');
const TEAMS_INFOS_KEY = makeStateKey<any>('teamsInfos');
// about-menu-data
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent
  extends BaseComponent
  implements AfterViewInit, OnDestroy, OnInit
{
  @ViewChild('container') containerRef: ElementRef<HTMLDivElement>;
  centerStartIndex: number;
  centerEndIndex: number;

  dynamicStateKey = makeStateKey<any>('aboutInfo');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'about-menu-data';
  dynamicPageData: any;
  dynamicConstentData: any;
  dynamicFullPageData: any;

  teamsInfos: any;

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
    this.teamsInfos = this.dynamicFullPageData['teams-info-data'];
  }
  ngOnDestroy() {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(this.dynamicStateKey);
      this.transferState.remove(this.dynamicStateConstentKey);
    }
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.calculateCenterIndices();
    }
  }
  calculateCenterIndices(): void {
    const containerWidth = this.containerRef.nativeElement.offsetWidth;
    const cartWidth = 50; // Adjust the cart width to match your style
    const numCartsPerRow = Math.floor(containerWidth / cartWidth);

    const firstRowCarts = 4;
    const secondRowCarts = this.teamsInfos.length - firstRowCarts;

    const remainingCarts = secondRowCarts - numCartsPerRow;
    const centerCartsPerSide = Math.floor(remainingCarts / 2);

    this.centerStartIndex = firstRowCarts + centerCartsPerSide;
    this.centerEndIndex =
      firstRowCarts +
      centerCartsPerSide +
      (remainingCarts % 2 === 0 ? centerCartsPerSide : centerCartsPerSide + 1);
  }
  getGridOrder(index: number): string {
    if (index % 2 === 0) {
      return 'order-even'; // CSS class for even index
    } else {
      return 'order-odd'; // CSS class for odd index
    }
  }
}
