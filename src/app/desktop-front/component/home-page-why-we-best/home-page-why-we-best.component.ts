import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { WHY_BEST_CONTENT_DATA } from 'src/app-data/data/why-we-are-best-content.data';
import { TITLE_CONTENT_DATA } from 'src/app-data/data/title-content.data';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/_shared/base/base.component';
import { LanguageSwitcherService } from 'src/app/_shared/services/language-switcher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'web-home-page-why-we-best',
  templateUrl: './home-page-why-we-best.component.html',
  styleUrls: ['./home-page-why-we-best.component.scss'],
})
export class HomePageWhyWeBestComponent
  extends BaseComponent
  implements OnDestroy, OnInit
{
  dynamicStateKey = makeStateKey<any>('whyBestData');
  dynamicStateConstentKey = makeStateKey<any>('constantData');
  dynamicDatabaseKey = 'why-we-are-best-section-data';
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
    if (isPlatformBrowser(this.platformId)) {
      this.scrollHandler();
      const line = document.querySelector('.lineMain') as HTMLElement;
      line.style.display = 'block';
      window.addEventListener('scroll', () => this.scrollHandler());
  
      this.onLanguageChange();
    }
  }
  ngOnDestroy() {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(this.dynamicStateKey);
      this.transferState.remove(this.dynamicStateConstentKey);
    }
  }

  scrollHandler(): void {
    if (isPlatformBrowser(this.platformId)) {
      const cart = document.querySelectorAll(
        '.cart'
      ) as NodeListOf<HTMLElement>;
      const timeline = document.querySelector('.timeline') as HTMLElement;
      const line = document.querySelector('.lineMain') as HTMLElement;
      line.style.bottom = `calc(100% - 20px)`;
      let prevScrollY = window.scrollY;
      let up: boolean, down: boolean;
      let full = false;
      let set = 0;
      const targetY = window.innerHeight * 0.8;

      const scrollHandler = () => {
        const { scrollY } = window;
        up = scrollY < prevScrollY;
        down = !up;
        const timelineRect = timeline.getBoundingClientRect();
        const lineRect = line.getBoundingClientRect();

        const dist = targetY - timelineRect.top;

        if (down && !full) {
          set = Math.max(set, dist);
          line.style.bottom = `calc(100% - ${set}px)`;
        }

        if (dist > timeline.offsetHeight + 50 && !full) {
          full = true;
          line.style.bottom = `-50px`;
        }

        cart.forEach((item: HTMLElement) => {
          const rect = item.getBoundingClientRect();

          if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me');
          }
        });

        prevScrollY = window.scrollY;
      };

      scrollHandler();
      window.addEventListener('scroll', scrollHandler);
    }
  }
}
