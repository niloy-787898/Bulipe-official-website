import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { BaseComponent } from '../base/base.component';
import { LanguageSwitcherService } from '../services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'web-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
})
export class MainFooterComponent extends BaseComponent
implements OnDestroy, OnInit{

  dynamicStateKey = makeStateKey<any>('footerContents');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'footer-section-data';
  dynamicPageData: any;
  dynamicFullPageData: any;
  dynamicConstentData: any;
  socialInfos: any ;

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
    this.socialInfos = this.dynamicFullPageData['social-data']
  }
  ngOnDestroy() {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(this.dynamicStateKey);
      this.transferState.remove(this.dynamicStateConstentKey);
    }
  }
}
