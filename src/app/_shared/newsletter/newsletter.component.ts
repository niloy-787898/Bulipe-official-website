import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute } from '@angular/router';
import { LanguageSwitcherService } from '../services/language-switcher.service';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent 
extends BaseComponent
implements OnDestroy, OnInit{

  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicConstentData: any;

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
  ngOnDestroy() {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(this.dynamicStateConstentKey);
    }
  }
}
