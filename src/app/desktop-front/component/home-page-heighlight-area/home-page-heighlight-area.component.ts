import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { HIGHLIGHT_AREA_CONTENT_DATA } from 'src/app-data/data/highlight-area-content.data';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute, Router } from '@angular/router';

// const HIGHLIGHTS_KEY = makeStateKey<any>('highlights');

@Component({
  selector: 'web-home-page-heighlight-area',
  templateUrl: './home-page-heighlight-area.component.html',
  styleUrls: ['./home-page-heighlight-area.component.scss']
})
export class HomePageHeighlightAreaComponent extends BaseComponent
implements  OnDestroy, OnInit{
  dynamicStateKey = makeStateKey<any>('highlights');
  dynamicDatabaseKey = 'highlights-data';
  dynamicPageData: any;

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
  }

  ngOnDestroy(): void {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(this.dynamicStateKey);
    }
  }
}
