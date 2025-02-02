import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { TranslationModel } from 'src/app/_shared/_interface/translation.interface';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docs-resources',
  templateUrl: './docs-resources.component.html',
  styleUrls: ['./docs-resources.component.scss'],
})
export class DocsResourcesComponent
  extends BaseComponent
  implements OnDestroy, OnInit
{
  dynamicStateKey = makeStateKey<any>('docResourcesData');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'docs-resource-data';
  dynamicPageData: any;
  dynamicConstentData: any;

  activeTabContent: string;
  sidebarExpanded: boolean = false;
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
    this.activeTabContent = 'This is test content';
    this.onLanguageChange();
  }
  ngOnDestroy() {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(this.dynamicStateKey);
      this.transferState.remove(this.dynamicStateConstentKey);
    }
  }
  setActiveTab(tab: any) {
    // Close other submenus if the clicked tab is not expanded
    if (!tab.expanded) {
      this.dynamicPageData.forEach(
        (menu: { submenu: any[]; expanded: boolean }) => {
          if (menu.submenu.includes(tab)) {
            menu.expanded = false;
          }
        }
      );
    }
  
    // Toggle the clicked tab's expanded state
    tab.expanded = !tab.expanded;
  
    // Set the activeTabContent to the clicked tab's description
    this.activeTabContent = tab.description;
  }
  toggleAccordions(docMenu: any) {
    // Close other accordions if the clicked accordion is not expanded
    if (!docMenu.expanded) {
      this.dynamicPageData.forEach((menu: { expanded: boolean }) => {
        if (menu !== docMenu) {
          menu.expanded = false;
        }
      });
    }
    // Toggle the clicked accordion
    docMenu.expanded = !docMenu.expanded;
  }
  toggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }
}
