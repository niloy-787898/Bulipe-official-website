import {
  Component,
  HostListener,
  OnInit,
  PLATFORM_ID,
  Inject,
  OnDestroy,
} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { FEATURE_MENU_DATA } from 'src/app-data/data/feature-menu.data';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';

const FEATURE_MENUS_KEY = makeStateKey<any>('featureMenusData');

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent
  extends BaseComponent
  implements OnDestroy, OnInit
{
  dynamicStateKey = makeStateKey<any>('featureMenusData');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'feature-menu-data';
  dynamicPageData: any;
  dynamicFullPageData: any;
  dynamicConstentData: any;

  activeTab = 0;
  fixedHeaderHeight: number;
  //background color
  backgroundColors = [
    '#7c68ee91',
    '#749bc2ca',
    '#9f76f9d9',
    '#91c8e4dc',
    '#e9b384da',
    '#9bd9e0d2',
    '#d7c0aeda',
  ];
  iconBackgroundColors = [
    '#7c68ee91',
    '#749BC2',
    '#A076F9',
    '#91C8E4',
    '#E9B384',
    '#A1CCD1',
    '#D7C0AE',
  ];
  iconColors = [
    '#7c68ee91',
    '#749BC2',
    '#A076F9',
    '#91C8E4',
    '#E9B384',
    '#A1CCD1',
    '#D7C0AE',
  ];
  iconHeadingColors = [
    '#7c68ee91',
    '#749BC2',
    '#A076F9',
    '#91C8E4',
    '#E9B384',
    '#A1CCD1',
    '#D7C0AE',
  ];
  // Array to store the dynamic colors for the active tab border
  activeTabBorderColor = [
    '#7c68ee91',
    '#749BC2',
    '#A076F9',
    '#91C8E4',
    '#E9B384',
    '#A1CCD1',
    '#D7C0AE',
  ];

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
      // Calculate and store the fixed header's height when the component initializes
      const headerMainElement = document.querySelector('.header-main');
      if (headerMainElement) {
        this.fixedHeaderHeight =
          headerMainElement.getBoundingClientRect().height;
      }
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
    // Check if the selected tab is different from the current active tab
    if (index !== this.activeTab) {
      // Add a transition delay before changing the active tab
      setTimeout(() => {
        this.activeTab = index;
      }, 300); // Adjust the delay time (in milliseconds) as needed
    }

    // Scroll to the target section
    const targetSectionId = 'tab-section-' + index;
    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
      const yOffset = -this.fixedHeaderHeight;
      const y =
        targetSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Update the active tab based on the scroll position
    this.updateActiveTab();
  }
  updateActiveTab() {
    const scrollPosition = window.pageYOffset;

    // Calculate the position of each content section
    const sections = this.dynamicPageData.map((_: any, i: string) => {
      const targetSectionId = 'tab-section-' + i;
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        return {
          index: i,
          position:
            targetSection.getBoundingClientRect().top +
            scrollPosition +
            this.fixedHeaderHeight,
        };
      }
      return { index: i, position: 0 };
    });

    // Find the section that is closest to the top of the viewport
    let closestSection = sections.reduce(
      (prev: { position: number }, curr: { position: number }) => {
        return Math.abs(curr.position - scrollPosition) <
          Math.abs(prev.position - scrollPosition)
          ? curr
          : prev;
      }
    );

    // Update the active tab if the closest section is different from the current active tab
    if (this.activeTab !== closestSection.index) {
      this.activeTab = closestSection.index;
    }
  }
}
