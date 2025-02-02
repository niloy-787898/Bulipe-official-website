import { Component, Inject, PLATFORM_ID ,OnDestroy, OnInit} from '@angular/core';
import {  isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'web-home-page-user-feedback',
  templateUrl: './home-page-user-feedback.component.html',
  styleUrls: ['./home-page-user-feedback.component.scss']
})
export class HomePageUserFeedbackComponent
extends BaseComponent
implements OnDestroy, OnInit{
  dynamicStateKey = makeStateKey<any>('feedbacksData');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'user-feedback-data';
  dynamicPageData: any;
  dynamicConstentData: any;

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
}
