import { Component, ElementRef, PLATFORM_ID, Inject, EventEmitter  } from '@angular/core';
import { LanguageSwitcherService } from './_shared/services/language-switcher.service';
import { Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public scrollToTop: EventEmitter<void> = new EventEmitter<void>();

  scrollToTopClicked(): void {
    this.scrollToTop.emit();
  }
  title = 'Bulipe-official-website';
  private subscription: Subscription = new Subscription;
  direction: string |'ltr'| 'rtl' = 'ltr'

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private langService: LanguageSwitcherService
  ) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.subscription = this.langService.ls$.subscribe((res: any) => {
        this.direction = this.langService.getDirection();
      });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
