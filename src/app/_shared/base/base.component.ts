import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

//localization
import * as DatabaseEn from '../../../assets/data/local.data.en.json';
import * as DatabaseBn from '../../../assets/data/local.data.bn.json';
import { LanguageSwitcherService } from '../services/language-switcher.service';

const DYNAMIC_LOCAL_En:any  = (DatabaseEn as any).default
const DYNAMIC_LOCAL_Bn:any  = (DatabaseBn as any).default

@Component({
  selector: 'web-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit{

  @Input() public languageKey: string | undefined = 'en';
  @Input() component: any = {};
  constructor(
    public langService: LanguageSwitcherService,
    @Inject(PLATFORM_ID) public platformId: any,
    public transferState: TransferState,
    ) {
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      // Server-side rendering this.langService.getLanguage()
     this.onLanguageChange();
      this.transferState.set(this.component.dynamicStateKey, this.component.dynamicPageData);
    } else if (isPlatformBrowser(this.platformId)) {
      // Browser-side rendering
      this.component.dynamicPageData = this.transferState.get(this.component.dynamicStateKey, []);
      // Fetch appMenus data from server if not transferred or empty
      if (!this.component.dynamicPageData || this.component.dynamicPageData.length === 0) {
        this.onLanguageChange();
      }
    }
    this.component.onCallNgOnInit();
  }
  onLanguageChange() {
    this.component.route.params.subscribe((params: { [x: string]: any }) => {
      let ln = params['languageKey'];
      let pln = this.component.route.snapshot.parent?.paramMap.get('languageKey')
      ln == undefined ? pln  : ln; 
      
      let serverData: any = ln == 'bn' ? DYNAMIC_LOCAL_Bn : DYNAMIC_LOCAL_En;
      let key = this.component.dynamicDatabaseKey;
      this.component.dynamicPageData = serverData[key];
      this.component.dynamicConstentData = serverData['constant-data'];
      this.component.dynamicFullPageData =serverData;
    });
  }
}
